const {User}= require('../../DB')

module.exports=async()=>{
    const allUsers=await User.findAll()
    return allUsers
}


   
