const {
  deleteNotification,
} = require("../../controllers/NotificationControllers");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteNotification(id);

    res.sendStatus(202)
  } catch (error) {
    res.status(400).send({ error: true, message: error.message });
  }
};
