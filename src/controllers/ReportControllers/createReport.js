const {Report,User}=require('../../DB');
module.exports=async({UserId,Description})=>{
    const UserResult=await User.findByPk(UserId);
    const ReportCreated=await Report.create({
        Description,
        UserId:UserResult.id
    });
    // ReportCreated.addUser(UserResult)
    return ReportCreated
} 