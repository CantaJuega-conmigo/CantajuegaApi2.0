const {User}=require('../../DB')
module.exports=async(id)=>{
    
    const deleteUser=await User.destroy({
        where:{
            id:id
        }
    })
    
    return deleteUser
}