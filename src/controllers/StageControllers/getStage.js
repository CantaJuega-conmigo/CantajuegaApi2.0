const { Stage, Child } = require('../../DB');

module.exports = async (relations) => {
  try {
    const allStage = relations
      ? await Stage.findAll({ include: Child })
      : await Stage.findAll();
    return allStage;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'getStage': ${error.message}`);
  }
};
