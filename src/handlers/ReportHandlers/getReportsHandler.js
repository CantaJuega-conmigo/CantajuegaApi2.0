const {
  getAllReports,
  getReport,
} = require("../../controllers/ReportControllers/index");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const response = id ? await getReport(id) : await getAllReports();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};
