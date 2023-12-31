const { deleteReport } = require('../../controllers/ReportControllers');
const { ErrorResponse } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error('Resquest failed.');
    }
    console.log(id);
    const response = await deleteReport(id);
    res.sendStatus(202);
  } catch (error) {
    // res.status(400).send({
    //   error: true,
    //   message: error.message ?? 'Server failed',
    // });
    ErrorResponse(res, 500, error);
  }
};
