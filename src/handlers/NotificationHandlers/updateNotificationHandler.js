const { response, ErrorResponse } = require('../../utils');
const {
  updateNotification,
} = require('../../controllers/NotificationControllers');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await updateNotification(id);
    response(res, 200, { data: updated });
  } catch (error) {
    ErrorResponse(res, 500, error);
  }
};
