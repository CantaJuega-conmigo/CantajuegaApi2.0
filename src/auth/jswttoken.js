const jswt =require('jsonwebtoken')
const secret='SECRETO'
module.exports=(user,expire)=>{
    return  jswt.sign({user:user,check:true},secret,{
        expiresIn: expire
    })
}