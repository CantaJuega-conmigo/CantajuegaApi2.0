const {Notification}=require('../../DB')
module.exports=async()=>{
    
    const allNotifications=await Notification.findAll({
        include:'Report'
    })
    return allNotifications
}