const { Router } = require("express");
const router = Router();
const {deleteUserHandler,getUsersHandler,registerUserHandler,editUserHandler}=require('../../handlers/UserHandlers');
const { loginHandler } = require("../../handlers/LoginHandler");

router.get('/:id',getUsersHandler)
router.get('/',getUsersHandler)

router.post('/login',loginHandler)

router.post('/register',registerUserHandler)

router.delete('/:id',deleteUserHandler)

router.put('/:id',editUserHandler)
module.exports=router