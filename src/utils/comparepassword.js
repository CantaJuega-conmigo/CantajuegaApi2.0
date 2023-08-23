const bcrypt=require('bcryptjs')
module.exports=async(password,passwordhash)=>{
    const compare=await bcrypt.compare(password,passwordhash)
    return compare
}