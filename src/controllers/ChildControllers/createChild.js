const { Child, Progress, Stage } = require("../../DB");
const { updateStatistic } = require("../../controllers/StatisticsControllers");
const { parse } = require("date-fns");
const { getAge } = require("../../utils");
const { Op } = require("sequelize");
const { getCorrectStage } = require("../../helpers/Stagehelpers");
module.exports = async ({
  id,
  firstName,
  lastName,
  gender,
  birthDate,
  age,
  UserId,
  StageId,
  ProgressId,
}) => {
  try {
    const newProgress = !ProgressId ? await Progress.create({}) : ProgressId;
    const splitDate = birthDate.split("/");
    const dateInFormatYYYYMMDD =
      splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0];

    const age = getAge(dateInFormatYYYYMMDD);

    const stage = await getCorrectStage(age);

    const create = await Child.create({
      id,
      firstName,
      lastName,
      gender,
      birthDate: dateInFormatYYYYMMDD,
      age,
      UserId,
      StageId: StageId ? StageId : stage.id,///because i use seed
      ProgressId: ProgressId ? ProgressId : newProgress.id, ///because i use seed
    });
    await updateStatistic("addChild");
    return create;
  } catch (error) {
    throw new Error(`Error en el servidor 'createChild': ${error.message}`);
  }
};
