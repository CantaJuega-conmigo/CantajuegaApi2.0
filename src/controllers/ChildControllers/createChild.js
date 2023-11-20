const { Child } = require("../../DB");
const { updateStatistic } = require("../../controllers/StatisticsControllers");
const { parse } = require("date-fns");
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
    const fechaString = "01/06/1999";
    const parsedDate = parse(fechaString, "dd/MM/yyyy", new Date());
    const create = await Child.create({
      id,
      firstName,
      lastName,
      gender,
      birthDate: parsedDate,
      age,
      UserId,
      StageId,
      ProgressId,
    });
    await updateStatistic("addChild");
    return create;
  } catch (error) {
    throw new Error(`Error en el servidor 'createChild': ${error.message}`);
  }
};
