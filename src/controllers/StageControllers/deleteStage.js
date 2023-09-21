const { Stage } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async (id) => {
  try {
    const deleteStage = await Stage.destroy({
      where: {
        id: id,
      },
    });
    await updateStatistic('deleteStage');
    return deleteStage;
  } catch (error) {
    console.log(error);
    throw new Error('Error in the server delete');
  }
};
