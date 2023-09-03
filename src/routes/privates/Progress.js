const {Router}=require('express');
const router=Router();
const {createProgressHandler,getProgressHandler,updateProgressHandler}=require('../../handlers/ProgressHandlers')

router.post('/',createProgressHandler)
router.get('/',getProgressHandler)
router.get('/:id',getProgressHandler)
router.put('/:id',updateProgressHandler)
module.exports=router 