const { Router } = require("express");
const {getallUsers,createNewUser,deleteUsers,editUsers}=require('../../handlers/UserHandlers')
const router = Router();

router.get('/',getallUsers)

router.post('/',createNewUser)

router.delete('/',deleteUsers)

router.put('/',editUsers)
module.exports=router