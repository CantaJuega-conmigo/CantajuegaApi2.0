const { Progress } = require("../../DB");
const {
  timeControlled,
  CompleteOtherVideos,
  CompleteFinalVideo,
} = require("../../helpers/ProgressHelpers");
module.exports = async (id, select) => {
  try {
    if (id && select) {
      ///si o si
      const progress = await Progress.findByPk(id);
      if (!progress[select].one_Day_Passed && progress[select].day_Started) {
        //solo validaremos si el progreso tiene como que no paso un dia y si llega una fecha
        const DAY_PROGRESS_STARTED = progress[select].day_Started; //dia que empezo a ver el video
        const isCorrect = timeControlled(DAY_PROGRESS_STARTED); //verificamos si ya paso un dia desde que vio el primer video
        if (isCorrect) {
          const isFinalVideo = select === "Final_Video";
          const fifthAtributte = isFinalVideo
            ? "Ready_to_Test"
            : "Ready_to_Next_Video";

          const newData = {
            ...progress[select],
            one_Day_Passed: isCorrect,
            [fifthAtributte]: true,
          };
          if (!isFinalVideo) {
            const completed = await CompleteOtherVideos(
              progress,
              select,
              newData,
              Progress,
              id,
              isCorrect
            );
            return completed;
          } else {
            const completed = await CompleteFinalVideo(
              progress,
              newData,
              select,
              id,
              Progress
            );
            return completed;
          }
        }
      }
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
