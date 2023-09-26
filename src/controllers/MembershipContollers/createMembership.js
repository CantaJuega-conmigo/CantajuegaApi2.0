const { Membership } = require('../../DB');
const { updateStatistic } = require('../../controllers/StatisticsControllers');
module.exports = async ({
  id,
  price,
  description,
  name,
  text1,
  text2,
  text3,
  recurrenteId,
  checkout
}) => {
  try {
    const newMembership = await Membership.create({
      id,
      price,
      description,
      name,
      text1,
      text2,
      text3,
      recurrenteId,
      checkout
    });
    await updateStatistic('addMembership');
    return true;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'createMembership': ${error.message}`
    );
  }
};
