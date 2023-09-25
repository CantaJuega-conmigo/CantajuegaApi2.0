const jswt =require('jsonwebtoken')
const secret='SECRETO'
module.exports=(user,expire)=>{
    return  jswt.sign({user:user},secret,{//para crear jsonwebtokens, user, es el valor que almacenara, secret el secreto para validar,
        expiresIn: expire//se le pasa la duracion de valides del jwt
    })
}