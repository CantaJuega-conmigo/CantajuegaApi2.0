const {updateProgressVideos,updateProgress}=require('../../controllers/ProgressControllers')
module.exports = async (req, res) => {
  const { select } = req.query;
  const { id } = req.params;
  const data=req.body
  try {
   const update=select? await updateProgressVideos(id,data,select):await updateProgress(id,data)
   res.status(201).send(update)
  } catch (error) {
    res.status(401).send(error.message)
  }
};
