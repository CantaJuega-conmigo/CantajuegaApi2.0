const {createReport}=require('../../controllers/ReportControllers/index')
module.exports=async(req,res)=>{
  try {
      const newReport=await createReport(req.body);
      res.status(200).send(newReport)
      
    } catch (error) {
      res.status(404).send(error.message)
    }
  }