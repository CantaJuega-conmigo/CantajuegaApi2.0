const { Stage, Child } = require("../../DB");
module.exports = async (id, childs) => {
  if (!id) throw new Error("Error in server");
  try {
    const stage = childs
      ? await Stage.findByPk(id, { include: Child })
      : await Stage.findByPk(id);
    if (!stage) throw new Error("No hay etapas aun en db.");
    return stage;
  } catch (error) {
    throw new Error(`Error en el servidor 'getStageById': ${error.message}`);
  }
};
