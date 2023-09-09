const {
  getNotification,
  getNotificationById,
} = require("../../controllers/NotificationControllers/index");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const response = id
      ? await getNotificationById(id)
      : await getNotification();

    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message,
    });
  }
};
