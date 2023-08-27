const {Router}=require('express');
const router=Router();
const {createProgressHandler}=require('../../handlers/ProgressHandlers')

router.post('/',createProgressHandler)

module.exports=router