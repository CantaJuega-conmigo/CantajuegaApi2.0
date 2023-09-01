const {getAllReports}=require('../../controllers/ReportControllers/index')
module.exports=async(req,res)=>{
  try {
    const allReports=await getAllReports();
    res.status(200).send(allReports)
  } catch (error) {
    res.send(error)
  }
  }
  