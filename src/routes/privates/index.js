const { Router } = require("express");
const { validateauth } = require("../../middlewares");

const router = Router();

//la idea es poner un middleware que verifique si esta logueado(que exista el token/cookie de auth)
router.get('/prueba',validateauth,(req,res)=>{
    res.send('pagina privada')
})
router.use('/reports',require('./Reports'))

module.exports = router;
