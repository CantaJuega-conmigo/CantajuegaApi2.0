const {validateToken}=require('../auth') 
module.exports=(req,res,next)=>{
   const token=req.headers['x-access-token']||req.headers['authorization']
   const validate=validateToken(token);
   const isemptytoken=token &&token==='Bearer'
    
   if(validate.error && isemptytoken ){
      res.status(404).send({
         error:validate.error,
         message:'Page not found,auth required'
       })
   }else if(validate.error&&!validate.auth){
      res.status(404).send({
        error:validate.error,
        message:'Access deneged, auth failed.'
      })
   }else{
    next()
   }


}