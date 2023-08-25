const {Report,User,Notification}=require('../../DB');
module.exports=async({UserId,Description})=>{
    const UserResult=await User.findByPk(UserId);
    const ReportCreated=await Report.create({
        Description,
        UserId:UserResult.id
    });
    if(ReportCreated){///si el reporte fue creado, generamos la notificacion que se sera para el admin

        const generateNotification=await Notification.create({
            notification_type:'Report',
            ReportId:ReportCreated.id
        })
    }
    return ReportCreated
} 