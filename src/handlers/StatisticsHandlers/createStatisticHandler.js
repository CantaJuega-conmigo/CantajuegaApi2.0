const {
  createStatistic,
  validate,
} = require('../../controllers/StatisticsControllers');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    if (await validate()) {
      //compruevo que no haya ningún Statistic creado, si esta ok, entonces lo creo
      await createStatistic();
      // res.status(201).send({ message: 'Statistic successfully created' });
      return response(res, 201, { message: 'Statistic successfully created' });
    }
  } catch (error) {
    // res.status(500).send({ message: error.message });
    return ErrorResponse(res, 500, error);
  }
};
