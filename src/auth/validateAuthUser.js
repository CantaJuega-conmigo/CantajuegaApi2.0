const getAuthUser = require('../controllers/UserControllers/getAuthUser');
const validatToken=require('./validatetoken')
module.exports=async(token)=>{
    try {      
        const authStatus=validatToken(token)
        const userId=authStatus.decoded.user.id
        
        const user=await getAuthUser(userId)
    
        return {
            error:authStatus.error,
            auth:authStatus.auth,
            user:user
        }
    } catch (error) {
        throw error.message
    }
} 