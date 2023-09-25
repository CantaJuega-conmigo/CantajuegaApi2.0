const { Stage } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async (id) => {
  try {
    const deleteStage = await Stage.destroy({
      where: {
        id: id,
      },
    });
    if (deleteStage) {
      await updateStatistic('deleteStage');
      return deleteStage;
    } else {
      throw new Error('No se pudo borrar el Stage');
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'deleteStage': ${error.message}`);
  }
};
