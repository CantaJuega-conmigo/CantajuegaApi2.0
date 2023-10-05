const { Progress } = require("../../DB");
const { timeControlled } = require("../../helpers/ProgressHelpers");
module.exports = async (id, select, progress) => {
  try {
    if (id && select && progress) {
      ///si o si

      if (!progress[select].one_Day_Passed && progress[select].day_Started) {
        //solo validaremos si el progreso tiene como que no paso un dia y si llega una fecha
        const DAY_PROGRESS_STARTED = progress[select].day_Started; //dia que empezo a ver el video
        const isCorrect = timeControlled(DAY_PROGRESS_STARTED); //verificamos si ya paso un dia desde que vio el primer video
        if (isCorrect) {
          const updated = {
            ...progress,
            [select]: {
              ...progress[select],
              one_Day_Passed: isCorrect,
            },
          };
          const query = await Progress.update(updated, { where: { id } }); //si es correcto modificamos en la db
          const isSucessfull = query[0] === 1;
          if (isSucessfull) {
            // si se modifico la db
            return updated; //retornamos los cambios sin hacer una query adicional
          }
          return false;
        }
        return false;
      }
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
