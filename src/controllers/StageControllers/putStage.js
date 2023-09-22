const { Stage } = require('../../DB');

module.exports = async (id, newData) => {
  try {
    const updateStage = await Stage.update(newData, {
      where: {
        id: id,
      },
    });
    console.log(updateStage);
    return updateStage;
  } catch (error) {
    console.log(error);
    throw new Error('Error en el servidor putStage');
  }
};
