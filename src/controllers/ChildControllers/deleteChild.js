const { Child } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async (id) => {
  try {
    const deleteChild = await Child.destroy({
      where: {
        id: id,
      },
    });
    await updateStatistic('deleteChild');
    return deleteChild;
  } catch (error) {
    console.log(error);
    throw new Error('Error in the server delete');
  }
};
