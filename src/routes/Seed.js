const {Router}=require('express')
const router= Router();
const {setSeedHandler}=require('../handlers/SeedHandlers')
 router.get('/',setSeedHandler)
module.exports=router