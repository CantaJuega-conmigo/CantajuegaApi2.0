const {
  getNotification,
} = require("../controllers/NotificationControllers/index");

const getAllNotifications = async (req, res) => {
  const allNotifications = await getNotification();
   res.status(200).send(allNotifications)
};
module.exports={
    getAllNotifications
}