const getAuthUser = require('../controllers/UserControllers/getAuthUser');
const validatToken=require('./validatetoken')
module.exports=async(req)=>{
///usada intencionalmente desde el front por si quieren saber info de un usuario si esta logueado.
    try {      
        const {accesscookie}=req.cookies///recibimos la cookie que lleguen de las peticiones
        const authStatus=validatToken(accesscookie)//validamos que el token que la cookie traiga se valido,
        const userId=authStatus.decoded.user.id//si lo anterior sale bien, nos quedamos con el id de la cuenta que envio la cookie.
        
        const user=await getAuthUser(userId)///buscamos al usuario logueado, y enviamos su info por si el front lo requiere
    
        return {
            error:authStatus.error,
            auth:authStatus.auth,
            user:user
        }
    } catch (error) {
        throw error.message
    }
} 