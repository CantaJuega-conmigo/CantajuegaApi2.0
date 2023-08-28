const {createReport}=require('../../controllers/ReportControllers/index')
module.exports=async(req,res)=>{
    const newReport=await createReport(req.body);
    res.status(200).send(newReport)
  }