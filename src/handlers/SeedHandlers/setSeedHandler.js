const { setSeed } = require("../../controllers/SeedControllers");
const { createStatistic } = require("../../controllers/StatisticsControllers");
const { ErrorResponse } = require("../../utils");
module.exports = async (req, res) => {
  try {
    await createStatistic();
    const seed = await setSeed();
    res.send(seed);
  } catch (error) {
    ErrorResponse(res, 404, error);
  }
};
