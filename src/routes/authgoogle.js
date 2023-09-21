const {Router}=require('express');
const router=Router();
const {googleauth, googlecallback}=require('../middlewares');
const { loginGoogleHandler } = require('../handlers/LoginHandler');
router.get('/google',googleauth);///ruta donde se ejecutara el inico con google,
router.get('/google/callback',googlecallback,loginGoogleHandler)// ruta donde se maneja la respuesta de la peticion, osea el inicio/registro de google
router.get('/prueba',(req,res)=>{
    res.send('hola')
})
module.exports=router