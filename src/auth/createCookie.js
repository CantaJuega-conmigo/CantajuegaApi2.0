const cookie=require('cookie')
module.exports=(token)=>{
   
   const cookiecreated=cookie.serialize('accesscookie',token,{
    httpOnly:true,
    sameSite:'strict',
    secure:true,
    maxAge:86400
   })
   return cookiecreated
}