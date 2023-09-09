const { Notification } = require("../../DB");
module.exports = async (id) => {
  try {
    const deleted = await Notification.destroy({ where: { id: id } });
    if(!deleted){
       throw new Error('Resquest failed.')
    }
    return 'Deleted succesfully'
  } catch (error) {
    throw error;
  }
};
