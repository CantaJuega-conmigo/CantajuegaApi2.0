const { Router } = require("express");
const router = Router();
const {deleteUserHandler,getUsersHandler,registerUserHandler,editUserHandler}=require('../../handlers/UserHandlers');
const { loginHandler } = require("../../handlers/LoginHandler");
const { validateRegister } = require("../../middlewares");

router.get('/:id',getUsersHandler)
router.get('/',getUsersHandler)

router.post('/login',loginHandler)

router.post('/register',validateRegister,registerUserHandler)

router.delete('/:id',deleteUserHandler)

router.put('/:id',editUserHandler)
module.exports=router