const { Stage } = require("../../DB");
const { updateStatistic } = require("../../controllers/StatisticsControllers");

module.exports = async ({
  id,
  name,
  description,
  minAge,
  maxAge,
  UserId,
  content,
  MembershipId
}) => {
  try {
    const create = await Stage.create({
      id,
      name,
      description,
      minAge,
      maxAge,
      UserId,
      content,
      MembershipId
    });
    await updateStatistic("addStage");
    return create;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'createStage': ${error.message}`);
  }
};
