const { Statistic } = require('../../DB');

module.exports = async () => {
  try {
    const getStatistic = await Statistic.findOne();
    if (getStatistic) {
      //Compruevo que exista la estadistica, de no ser asi entonces lanzo un error
      return getStatistic;
    } else {
      throw new Error(`No se encontró ninguna estadística`);
    }
  } catch (error) {
    throw new Error(`Error en el servidor 'getStatistic': ${error.message}`);
  }
};
