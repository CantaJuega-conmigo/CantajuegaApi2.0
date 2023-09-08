const { Router } = require("express");
const router = Router();
const { deleteUserHandler, getUsersHandler, registerUserHandler, editUserHandler, logicalDeletionUserHandler ,authUserHandler} = require('../../handlers/UserHandlers');
const { loginHandler } = require("../../handlers/LoginHandler");
const { validateRegister ,validateLogin} = require("../../middlewares");
const {loginValidators,registerValidators}=require('../../validators')
router.get('/auth',authUserHandler)
router.get('/:id', getUsersHandler)
router.get('/', getUsersHandler)
router.post('/login',loginValidators,validateLogin,loginHandler)

router.post('/register',registerValidators,validateRegister,registerUserHandler)

router.delete('/:id', deleteUserHandler)

router.patch('/:id', logicalDeletionUserHandler)

router.put('/:id', editUserHandler)
module.exports = router