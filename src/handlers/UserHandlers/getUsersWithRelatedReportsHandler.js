const { response, ErrorResponse } = require('../../utils');
const {
  getUsersWithRelatedReports,
} = require('../../controllers/UserControllers');

module.exports = async (req, res) => {
  const { id } = req.query;
  try {
    const data = id
      ? await getUsersWithRelatedReports(id)
      : await getUsersWithRelatedReports();
    response(res, 200, { data });
  } catch (error) {
    ErrorResponse(res, 404, error);
  }
};
