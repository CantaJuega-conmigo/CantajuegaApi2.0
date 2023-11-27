const { Child, Progress } = require("../../DB");
const { updateStatistic } = require("../../controllers/StatisticsControllers");
const { parse } = require("date-fns");
module.exports = async ({
  id,
  firstName,
  lastName,
  gender,
  birthDate,
  age,
  UserId,
  StageId,
  ProgressId,
}) => {
  try {
    const newProgress = !ProgressId ? await Progress.create({}) : ProgressId;
    const create = await Child.create({
      id,
      firstName,
      lastName,
      gender,
      birthDate,
      age,
      UserId,
      StageId,
      ProgressId: ProgressId ? ProgressId : newProgress.id,///because i use seed 
    });
    await updateStatistic("addChild");
    return create;
  } catch (error) {
    throw new Error(`Error en el servidor 'createChild': ${error.message}`);
  }
};
