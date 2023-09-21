const { Child } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
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
  console.log(ProgressId);
  try {
    const create = await Child.create({
      id,
      firstName,
      lastName,
      gender,
      birthDate,
      age,
      UserId,
      StageId,
      ProgressId,
    });
    await updateStatistic('addChild');
    return create;
  } catch (error) {
    console.log(error);
    throw new Error('Error in the server create');
  }
};
