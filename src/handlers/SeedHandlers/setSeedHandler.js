const {setSeed}=require('../../controllers/SeedControllers')
const { ErrorResponse } = require('../../utils')
module.exports=async (req,res)=>{
  try {
    const seed=await setSeed()
    res.send(seed)
    
  } catch (error) {
    ErrorResponse(res,404,error)
  }
}