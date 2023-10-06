const { getObjectAtributtes } = require("../../utils");
module.exports = async (ActualProgress, select, newData, ProgressModel, id,daypassed) => {
  try {
    const properties = getObjectAtributtes(ActualProgress.dataValues); //obtenemos los atributos del modelo en general
    const nextProgressName = properties[properties.indexOf(select) + 1]; //nos quedamos con la propiedad/progreso que sigue
    const nextProgress = await ActualProgress.dataValues[nextProgressName];
    ///habilitamos el proximo video
    nextProgress.Last_Video_Completed = daypassed?daypassed:false;
    const newProgress = {
      ...ActualProgress,
      [nextProgressName]: nextProgress,
      [select]: {
        ...newData,
        day_Started: !newData.day_Started///guardamos la fecha cuando fue visto 4 veces
          ? new Date()
          : newData.day_Started,
      },
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
