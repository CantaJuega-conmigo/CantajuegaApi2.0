const { Router } = require("express");

const router = Router();

//la idea es poner un middleware que verifique si esta logueado(que exista el token/cookie de auth)
router.use('/users',require('./Users'))

module.exports = router;
