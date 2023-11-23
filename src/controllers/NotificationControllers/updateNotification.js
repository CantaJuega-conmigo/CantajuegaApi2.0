const { Notification } = require('../../DB');
module.exports = async (id, body) => {
  try {
    const notification = await Notification.findByPk(id);
    if (notification) {
      notification.is_read = true;
      const updated = await notification.save();
      return updated;
    }
    throw new Error('Notification not found');
  } catch (error) {
    throw new Error(
      `Error en el servidor 'updateNotification': ${error.message}`
    );
  }
};
