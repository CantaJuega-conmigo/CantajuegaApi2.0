const getAuthUser = require('../controllers/UserControllers/getAuthUser');
const validatToken=require('./validatetoken')
module.exports=async(req)=>{

    try {      
        const {accesscookie}=req.cookies
        const authStatus=validatToken(accesscookie)
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