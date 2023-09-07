const {getObjectAtributtes} =require('../../utils')
module.exports = async (ActualProgress, select, newData, ProgressModel, id) => {
  try {
    const properties = getObjectAtributtes(ActualProgress.dataValues); //obtenemos los atributos del modelo en general
    const nextProgressName = properties[properties.indexOf(select) + 1]; //nos quedamos con la propiedad/progreso que sigue
    const nextProgress = ActualProgress.dataValues[nextProgressName];
    nextProgress.Last_Video_Completed = true;
    const newProgress = {
      ...ActualProgress,
      [nextProgressName]: nextProgress,
      [select]: newData,
    };
    const finalUpdate = await ProgressModel.update(newProgress, {
      where: {
        id: id,
      },
    });
    return finalUpdate;
  } catch (error) {
    throw error;
  }
};
