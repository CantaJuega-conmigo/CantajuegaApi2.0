const {Router}=require('express');
const router=Router();
const {createProgressHandler,getProgressHandler}=require('../../handlers/ProgressHandlers')

router.post('/',createProgressHandler)
router.get('/',getProgressHandler)
router.get('/:id',getProgressHandler)

module.exports=router 