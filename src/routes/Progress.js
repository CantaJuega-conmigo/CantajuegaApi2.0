const {Router}=require('express');
const router=Router();
const {createProgressHandler,getProgressHandler,updateProgressHandler, dateProgressSelectHandler}=require('../handlers/ProgressHandlers');
const {validateUpdateProgress} = require('../middlewares');
router.patch('/:id',dateProgressSelectHandler)
router.post('/',createProgressHandler)
router.get('/',getProgressHandler)
router.get('/:id',getProgressHandler)
router.put('/:id',validateUpdateProgress,updateProgressHandler)
module.exports=router 