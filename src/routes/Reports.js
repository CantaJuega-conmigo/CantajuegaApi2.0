const { Router } = require("express");
const router = Router();
const {createReportHandler,getReportsHandler,deleteReportHandler}=require('../handlers/ReportHandlers');

router.get('/',getReportsHandler)
router.post('/',createReportHandler)
router.delete('/:id',deleteReportHandler)
router.get('/:id',getReportsHandler)



module.exports=router