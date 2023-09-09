const {validateToken}=require('../auth')
module.exports=(req,res,next)=>{
  try {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    const validateresult = validateToken(token);
    const isTokenExists = token && token !== "Bearer";
    const isUserAdmin=validateresult.decoded.user.is_Admin
    
    if(validateresult.error || !isTokenExists){
      throw new Error('Authentication failed!')
    }
    if(!isUserAdmin){
      throw new Error('Access deneged.')
    }
    next()
  } catch (error) {
    res.status(401).send({
      error:true,
      message:error.message
    })
  }
}