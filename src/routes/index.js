const { Router } = require("express");
const router = Router();
const {Child}=require('../DB')
const {createChildHandler}=require('../handlers/ChildHandlers')
router.get("/", (req, res) => {
  res.send("Welcome to Cantajuega");
});
// router.get('/child',async(req,res)=>{
//   const allChilds=await Child.findAll({include:['User','Progress','Stage']})
//   res.send(allChilds)
// })
// router.post('/child',createChildHandler)
router.use("/", require("./publics"));

router.use("/", require("./privates"));

router.use("*", (req, res) => {
  res.status(404).send("page not found bro"); 
});

module.exports = router;
