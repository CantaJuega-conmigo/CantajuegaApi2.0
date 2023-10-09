const CompleteOtherVideos=require('./CompleteOtherVideos')
const CompleteFinalVideo=require('./CompleteFinalVideo');
const timeControlled = require('./timeControlled');
module.exports = async (ActualProgress, newData, select, id, ProgressModel) => {
  try {
    const lastTotal = ActualProgress.dataValues[select].Total;
    const totalRecibed = newData.Total;
    const isCorrectValue = totalRecibed - lastTotal === 1;
    const isFinalVideo = select === "Final_Video";
    const fifthAtributte = isFinalVideo
      ? "Ready_to_Test"
      : "Ready_to_Next_Video";
    ////algunas validaciones
    if (!isCorrectValue) {
      throw new Error(
        `El valor ${totalRecibed} del atributo:"Total" no es correcto para aumentar la vista del video.Debe ser 1 mas que el valor actual:${lastTotal}`
      );
    }
    if (totalRecibed <= 4 && newData[fifthAtributte]) {
      throw new Error(
        `No es posible actualizar el atributo,${fifthAtributte}, ya que el video debe tene al menos 4 vistas`
      );
    }

    if (!newData[fifthAtributte] && ActualProgress[select][fifthAtributte]) {
      throw new Error(
        `No es posible actualizar el atributo,${fifthAtributte} ya que el video ya fue visto.`
      );
    }
    // newData.one_Day_Passed =newData.one_Day_Passed?true:timeControlled(newData.day_Started)//nos fijamos si el tiempo necesario para desbloquear el otro video ya paso
    ///solo cuando la vista del video  llega a 4
    if (totalRecibed === 4) {
      // newData[fifthAtributte] = true;
      if (!isFinalVideo) {
        const completed = await CompleteOtherVideos(
          ActualProgress,
          select,
          newData,
          ProgressModel,
          id
        );
        return completed;
      } else {
        const completed = await CompleteFinalVideo(
          ActualProgress,
          newData,
          select,
          id,
          ProgressModel
        );
        return completed;
      }
    }

    if(lastTotal>3&& !newData.day_Started){
      throw new Error('Invalid request')
    }
    if(ActualProgress[select].day_Started!==newData.day_Started){
      throw new Error('Is not possible change the original date.')
    }
    ///////Lo siguiente es para las actulizaciones normales osea se ejecutar siempre despues de las 4 vistas
    const newProgress = {
      ...ActualProgress,
      [select]: newData,
    };

    const updateProgress = await ProgressModel.update(newProgress, {
      where: {
        id: id,
      },
    });
    return updateProgress;
  } catch (error) {
    throw error;
  }
};
