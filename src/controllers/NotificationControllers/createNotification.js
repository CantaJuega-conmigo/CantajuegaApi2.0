const { Notification } = require("../../DB");
module.exports = async (type,model) => {
  if (type === "Report") {
    const create = await Notification.create({
      notification_type: type,
      ReportId:model.id
    });
    return
  }
  if(type === "Resquest"){
     console.log('aqui iria logica para crear nueva solicitud')
     return 
  }
};
