const { allStage } = require("../../controllers/StageControllers");

module.exports = async (req, res) => {
  const stage = await allStage();
  res.status(200).send(stage);
};
