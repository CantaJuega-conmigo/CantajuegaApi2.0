const {updateProgress}=require('../../controllers/ProgressControllers')
module.exports = async (req, res) => {
  const { select } = req.query;
  const { id } = req.params;
  const data=req.body
  try {
   const update=await updateProgress(id,data,select)
   res.status(201).send(update)
  } catch (error) {
    res.status(404).send(error.message)
  }
};
