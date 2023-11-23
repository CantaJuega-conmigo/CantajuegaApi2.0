const { Notification , Report,User} = require('../../DB');
module.exports = async () => {
  try {
    const allNotifications = await Notification.findAll({
      include: {model: Report, attributes: ['id','Description','UserId'], include: {model: User, attributes: ['firstName']}},
    });
    return allNotifications;
  } catch (error) {
    throw new Error(`Error en el servidor 'getNotification': ${error.message}`);
  }
};