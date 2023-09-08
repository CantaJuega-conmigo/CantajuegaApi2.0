const { Router } = require("express");
const router = Router();
const {createReportHandler,getReportsHandler}=require('../handlers/ReportHandlers');

router.get('/',getReportsHandler)
router.post('/',createReportHandler)


module.exports=router