const { Statistic } = require('../../DB');

module.exports = async () => {
  try {
    const create = await Statistic.create();
    return create;
  } catch (error) {
    throw new Error(`Error in the server 'createStatistic': ${error.message}`);
  }
};
