const {validateAuthUser}=require('../../auth')
module.exports=async(req,res)=>{
  try {
    const isUserAuth=await validateAuthUser(req)
    res.send(isUserAuth)
  } catch (error) {
    res.clearCookie('accesscookie')
    res.status(401).send({
      error:true,
      message:'Auth failed.Access deneged.'
     })    
  }
} 