const { response, ErrorResponse } = require('../../utils');
const {
  getUsersWithRelatedReports,
} = require('../../controllers/UserControllers');

module.exports = async (_req, res) => {
  try {
    const data = await getUsersWithRelatedReports();
    response(res, 200, { data });
  } catch (error) {
    ErrorResponse(res, 404, error);
  }
};
