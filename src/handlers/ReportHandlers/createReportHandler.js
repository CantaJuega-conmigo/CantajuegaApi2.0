const { createReport } = require('../../controllers/ReportControllers/index');
const { response, ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const newReport = await createReport(req.body);
    // res.status(200).send(newReport);
    response(res, 200, { data: newReport });
  } catch (error) {
    // res.status(404).send(error.message);
    ErrorResponse(res, 404, error);
  }
};
