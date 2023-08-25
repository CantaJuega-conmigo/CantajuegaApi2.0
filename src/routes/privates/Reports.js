const { Router } = require("express");
const router = Router();
const {createNewReport,getallReports}=require('../../handlers/ReportHandlers');

router.get('/',getallReports)
router.post('/',createNewReport)


module.exports=router