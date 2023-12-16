const {User}=require('../../DB');
module.exports=async(id)=>{
    const user=await User.findByPk(id);
    if(!user) throw new Error('User not found');
    if(user.Membership) throw

 
}