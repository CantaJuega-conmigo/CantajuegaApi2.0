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
}) => {
  try {
    const addMembership = await Membership.create({
      id,
      price,
      description,
      name,
      text1,
      text2,
      text3,
      recurrenteId,
    });
    console.log('ENTRE CONTRO');
    await updateStatistic('addMembership');
    return addMembership;
  } catch (error) {
    throw new Error(
      `Error en el servidor 'createMembership': ${error.message}`
    );
  }
};
