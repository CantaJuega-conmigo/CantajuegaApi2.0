const {User}=require('../../DB')
module.exports=async({firstName,lastName,email,password})=>{
    const create=await User.create({
        firstName,
        lastName,
        password,
        email
    })

    return create
}