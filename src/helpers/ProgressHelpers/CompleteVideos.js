const CompleteOtherVideos=require('./CompleteOtherVideos')
const CompleteFinalVideo=require('./CompleteFinalVideo')
module.exports = async (ActualProgress, newData, select, id, ProgressModel) => {
  try {
    const lastTotal = ActualProgress.dataValues[select].Total;
    const totalRecibed = newData.Total;
    const isCorrectValue = totalRecibed - lastTotal === 1;
    const isFinalVideo = select === "Final_Video";
    const thirdAtributte = isFinalVideo
      ? "Ready_to_Test"
      : "Ready_to_Next_Video";
    ////algunas validaciones
    if (!isCorrectValue) {
      throw new Error(
        `El valor ${totalRecibed} del atributo:"Total" no es correcto para aumentar la vista del video.Debe ser 1 mas que el valor actual:${lastTotal}`
      );
    }
    if (totalRecibed <= 2 && newData[thirdAtributte]) {
      throw new Error(
        `No es posible actualizar el atributo,${thirdAtributte}, ya que el video debe tene al menos 2 vistas`
      );
    }

    if (!newData[thirdAtributte] && ActualProgress[select][thirdAtributte]) {
      throw new Error(
        `No es posible actualizar el atributo,${thirdAtributte} ya que el video ya fue visto.`
      );
    }
    ///solo cuando la vista del video  llega a 2
    if (totalRecibed === 2) {
      newData[thirdAtributte] = true;
      console.log(newData, newData[thirdAtributte]);
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
    ///////Lo siguiente es para las actulizaciones normales osea se ejecutar siempre despues de las 2 vistas
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
