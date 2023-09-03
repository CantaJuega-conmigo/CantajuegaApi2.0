const {setSeed}=require('../../controllers/SeedControllers')
module.exports=async (req,res)=>{
  const seed=await setSeed()
  res.send(seed)
}