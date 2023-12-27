const { Statistic } = require("../../DB");

module.exports = async () => {
  try {
    const exist = await Statistic.findAll();
    if (exist.length) return;
    console.log("hola");
    const create = await Statistic.create();
    return create;
  } catch (error) {
    throw new Error(`Error en el servidor 'createStatistic': ${error.message}`);
  }
};
