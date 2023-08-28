const {
  getNotification,
} = require("../../controllers/NotificationControllers/index");
module.exports = async (req, res) => {
  const allNotifications = await getNotification();
  res.status(200).send(allNotifications);
};
