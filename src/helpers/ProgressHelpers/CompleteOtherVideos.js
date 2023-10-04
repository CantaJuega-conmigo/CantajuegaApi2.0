const {getObjectAtributtes} =require('../../utils')
module.exports = async (ActualProgress, select, newData, ProgressModel, id) => {
  try {
    const properties = getObjectAtributtes(ActualProgress.dataValues); //obtenemos los atributos del modelo en general
    const nextProgressName = properties[properties.indexOf(select) + 1]; //nos quedamos con la propiedad/progreso que sigue
    const nextProgress = ActualProgress.dataValues[nextProgressName];
    ///habilitamos el proximo video
    nextProgress.Last_Video_Completed = true;
    nextProgress.day_Started = !nextProgress.day_Started?new Date():nextProgress.day_Started;//dia que completo la cantida minima de vistas
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
