const {Router}=require('express');
const router=Router();
const {googleauth, googlecallback}=require('../middlewares');
const { loginGoogleHandler } = require('../handlers/LoginHandler');
router.get('/google',googleauth);
router.get('/google/callback',googlecallback,loginGoogleHandler)
router.get('/prueba',(req,res)=>{
    res.send('hola')
})
module.exports=router