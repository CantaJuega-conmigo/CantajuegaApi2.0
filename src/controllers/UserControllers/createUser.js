const {User}=require('../../DB')
const {hashpassword}=require('../../utils')
module.exports=async({firstName,lastName,email,password})=>{
    const is_Admin=['joakig6@gmail.com'].includes(email)
    const hashedPassword=await hashpassword(password)
    const create=await User.create({
        firstName,
        lastName,
        password:hashedPassword,
        email,
        is_Admin
    })
    return create
}