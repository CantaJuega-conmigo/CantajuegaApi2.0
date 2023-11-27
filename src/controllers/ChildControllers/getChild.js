const { Child, User, Stage, Progress } = require("../../DB");

module.exports = async (exclude) => {
  try {
    const allChild = exclude !=='stages'
      ? await Child.findAll({
          include: [
            { model: User, attributes: ["firstName"] },
            { model: Stage, attributes: ["name"] },
          ],
        })
      : await Child.findAll({
          where: {
            StageId: null,
          },
        });
    return allChild;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'getChild': ${error.message}`);
  }
};
