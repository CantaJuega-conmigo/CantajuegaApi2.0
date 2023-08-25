const {createReport,getAllReports:getHandler}=require('../controllers/ReportControllers/index')

const createNewReport=async(req,res)=>{
  const newReport=await createReport(req.body);
  res.status(200).send(newReport)
}
const getallReports=async(req,res)=>{
  const allReports=await getHandler();
  res.status(200).send(allReports)
}

module.exports={
    createNewReport,
    getallReports
}