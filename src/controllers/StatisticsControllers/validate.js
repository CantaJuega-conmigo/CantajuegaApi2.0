const { Error } = require('sequelize');
const { Statistic } = require('../../DB');

module.exports = async () => {
  /*Esta función la uso para validar que solo pueda existir un solo
  elemento en la tabla Statistic, ya que solo se va a usar uno solo*/
  try {
    const getAllStatistics = await Statistic.findAll();
    if (getAllStatistics.length >= 1) {
      throw new Error(
        'Ya existe una estadística, no se puede crear mas de una.'
      );
    } else {
      return true;
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'validate' ${error.message}`);
  }
};
