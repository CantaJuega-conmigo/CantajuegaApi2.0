const { Router } = require("express");
const {Child}=require('../../DB')
const {createChild}=require('../../controllers/ChildControllers')
const router = Router();

router.use("/user", require("./Users"));
router.use("/stage", require("./Stage"));
router.use("/seed", require("./Seed"));
router.get('/childs',async(req,res)=>{
    const allChilds=await Child.findAll({include:'User'})
  res.send(allChilds)
})
router.post('/childs',async(req,res)=>{
    const {id,firstName, lastName, gender, birthDate, age,UserId}=req.body
    const create=await createChild({
        id,firstName, lastName, gender, birthDate, age,UserId
    }) 
     
  res.send(create)
})
module.exports = router;
