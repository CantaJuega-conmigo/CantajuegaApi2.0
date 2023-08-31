const { getProgress } = require("../../controllers/ProgressControllers");
module.exports = async (req, res) => {
  const { id } = req.params;
  const { video } = req.query;
  console.log(video);
  try {
    if (id && !video) {
      const Progress = await getProgress(id);
      res.send(Progress);
    } else if (video && id) {
      const result = (await getProgress(id)) ?? {};

      res.send(result[video]);
    } else {
      const Progress = await getProgress();
      res.send(Progress);
    }
  } catch (error) {
    res.status(404).send(error)
  }
};
