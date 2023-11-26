const { Stage, Child } = require("../../../src/DB");
module.exports = async ( childId, stageId) => {
  try {
    const child = await Child.findByPk(childId);
    if (!child) {
      throw new Error("No se encontro un niño con ese id");
    }
    const stage = await Stage.findByPk(stageId);
    if (!stage) {
      throw new Error("No se encontro una etapa con ese id");
    }
    const status = await stage.addChild(child);
    return status;
  } catch (error) {
    throw new Error(`Error en el servidor 'addChildStage': ${error.message}`);
  }
};
