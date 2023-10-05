const { Progress } = require("../../DB");
const updateDayPassed = require("./updateDayPassed");
module.exports = async (id, select) => {
  try {
    const HandlersResult = id
      ? await Progress.findByPk(id, { include: "Child" })
      : await Progress.findAll({ include: "Child" });
    if (id && !HandlersResult) throw new Error("Progress not found");
    if (!id && !HandlersResult.length) throw new Error("No progresses yet.");
    const VideoDateValidateResult = await updateDayPassed(
      id,
      select,
      HandlersResult
    );
    if (select && VideoDateValidateResult) {
      return VideoDateValidateResult;
    }
    return HandlersResult;
  } catch (error) {
    throw new Error(`Error en el servidor 'getProgress': ${error.message}`);
  }
};
