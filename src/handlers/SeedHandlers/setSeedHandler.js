const {setSeed}=require('../../controllers/SeedControllers')
module.exports=async (req,res)=>{
  setSeed()
  res.send('seed')
}