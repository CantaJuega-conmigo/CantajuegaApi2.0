const { Stage } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');

module.exports = async ({
  id,
  name,
  description,
  minAge,
  maxAge,
  UserId,
  content,
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
    });
    await updateStatistic('addStage');
    return create;
  } catch (error) {
    console.log(error);
    throw new Error(`Error en el servidor 'createStage': ${error.message}`);
  }
};
