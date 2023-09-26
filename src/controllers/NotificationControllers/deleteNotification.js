const { Notification } = require('../../DB');
module.exports = async (id) => {
  try {
    const deleted = await Notification.destroy({ where: { id: id } });
    if (!deleted) {
      throw new Error('No se borro la notificación');
    }
    return 'Deleted succesfully';
  } catch (error) {
    throw new Error(
      `Error en el servidor 'deleteNotification': ${error.message}`
    );
  }
};
