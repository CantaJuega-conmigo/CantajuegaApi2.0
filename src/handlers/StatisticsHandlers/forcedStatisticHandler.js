const { forcedStatistic } = require('../../controllers/StatisticsControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const statistics = await forcedStatistic();
    response(res, 200, { data: statistics });
  } catch (error) {
    return ErrorResponse(res, 500, error);
  }
};
