const { Router } = require("express");
const router = Router();
const {getallUsers,createNewUser,deleteUsers,editUsers}=require('../../handlers/UserHandlers');
const { loginHandler } = require("../../handlers/LoginHandler");

router.get('/',getallUsers)

router.post('/login',loginHandler)

router.post('/register',createNewUser)

router.delete('/:id',deleteUsers)

router.put('/:id',editUsers)
module.exports=router