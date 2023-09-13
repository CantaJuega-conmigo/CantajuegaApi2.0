const {validateAuthUser}=require('../../auth')
module.exports=async(req,res)=>{
  console.log(req.cookies.accesscookie)
  try {
    const token=req.headers['x-access-token']||req.headers['authorization']
    const isUserAuth=await validateAuthUser(token)
    res.send(isUserAuth)
  } catch (error) {
     res.status(401).send({
      error:true,
      message:'Auth failed.Access deneged.'
     })    
  }
}