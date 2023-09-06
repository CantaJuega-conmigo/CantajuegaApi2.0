const { getProgress } = require("../../controllers/ProgressControllers");
module.exports = async (req, res) => {
  const { id } = req.params;
  const { select } = req.query;
  try {
    if (id && !select) {
      const Progress = await getProgress(id);
      res.send(Progress);
    } else if (select && id) {
      const result = await getProgress(id)
      if(!result[select])throw new Error('Not found')
      res.send(result[select]);
    } else {
      const Progress = await getProgress();
      res.send(Progress);
    }
  } catch (error) {
    res.status(404).send({error:true,message:error.message})
  }
};
