const {createProgress}=require('../../controllers/ProgressControllers')
module.exports=async(req,res)=>{
    const startProgress=await createProgress();

    res.send(startProgress)
}