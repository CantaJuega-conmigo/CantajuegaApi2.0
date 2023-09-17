const {generateSecret}=require('speakeasy')
module.exports=async()=>{
   const secret=generateSecret()
   console.log(secret.base32)
}