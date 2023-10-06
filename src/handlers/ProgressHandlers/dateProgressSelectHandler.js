const { updateDayPassed } = require("../../controllers/ProgressControllers");
const { response, ErrorResponse } = require("../../utils");

module.exports=async(req,res)=>{
  try {
    const {id}=req.params;
    const {select}=req.query;
    if(id&&select){
      const results=await updateDayPassed(id,select)
      return response(res,200,{message:results})
    }
  } catch (error) {
    return ErrorResponse(res,400,error)
  }
}