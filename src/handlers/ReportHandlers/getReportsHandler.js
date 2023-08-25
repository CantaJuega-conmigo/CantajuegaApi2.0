const {getAllReports}=require('../../controllers/ReportControllers/index')
module.exports=async(req,res)=>{
    const allReports=await getAllReports();
    res.status(200).send(allReports)
  }
  