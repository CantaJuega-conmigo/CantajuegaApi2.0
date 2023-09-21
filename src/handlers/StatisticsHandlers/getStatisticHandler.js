const {
  getStatistic,
  getStatisticByQuery,
} = require('../../controllers/StatisticsControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  const { select } = req.query;

  try {
    if (select) {
      const searchQuery = await getStatisticByQuery(select);
      if (searchQuery) {
        // return res.status(200).send(searchQuery);
        return response(res, 200, { data: searchQuery });
      }
    } else {
      const fullStatistic = await getStatistic();
      // return res.status(200).send(await getStatistic());
      return response(res, 200, { data: fullStatistic });
    }
  } catch (error) {
    // res.status(500).send({ message: error.message });
    return ErrorResponse(res, 500, error);
  }
};
