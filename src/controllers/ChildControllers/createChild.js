const { Child, Progress, User } = require("../../DB");
const { updateStatistic } = require("../../controllers/StatisticsControllers");
const { parse } = require("date-fns");
const { getAge } = require("../../utils");
const { Op } = require("sequelize");
const { getCorrectStage } = require("../../helpers/Stagehelpers");
const { createToken } = require("../../auth");
module.exports = async (
  {
    id,
    firstName,
    lastName,
    gender,
    birthDate,
    age,
    UserId,
    StageId,
    ProgressId,
  },
  googleRegister
) => {
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
      StageId: StageId ? StageId : stage.id, ///because i use seed
      ProgressId: ProgressId ? ProgressId : newProgress.id, ///because i use seed
    });
    await updateStatistic("addChild");
    if (googleRegister) {
      ///when the user finish de register google
      console.log("googleRegister llegue");
      const user = await User.findOne({
        where: { id: UserId },
        include: ["Children", "Reports", "Membership"],
      });
      const Token = createToken(user, "1d");
      return {
        token: Token,
        user: user,
      };
    }
    return create;
  } catch (error) {
    throw new Error(`Error en el servidor 'createChild': ${error.message}`);
  }
};
