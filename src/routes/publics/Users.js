const { Router } = require("express");
const router = Router();
const {getallUsers,createNewUser,deleteUsers,editUsers}=require('../../handlers/UserHandlers')

router.get('/',getallUsers)

router.post('/',createNewUser)

router.delete('/:id',deleteUsers)

router.put('/:id',editUsers)
module.exports=router