module.exports=async (updatedProgress, ProgressModel, id) => {
    //para cuando el pdf sea marcado como visto y se de acceso a la primer video
    const isPdfCompleted = updatedProgress.dataValues.Pdf_Viewed;
    try {
      if (isPdfCompleted) {
        const nextProgress = updatedProgress.dataValues.First_Video;
        nextProgress.PdfCompleted = true;
        const newProgress = {
          ///y si todo va bien hacemos cambios
          ...updatedProgress,
          First_Video: nextProgress,
        };
        const finalUpdate = await ProgressModel.update(newProgress, {
          where: {
            id: id,
          },
        });
  
        return "Ya puedes acceder al primer video.";
      } else {
        throw new Error(
          "No se puede actualizar el estado, ya que el pdf ya fue visto anteriormente."
        );
      }
    } catch (error) {
      throw error;
    }
}