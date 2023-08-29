const { putStage } = require("../../controllers/StageControllers");

module.exports = async (req, res) => {
  const stageId = req.params.id;
  const newData = req.body;

  try {
    const updated = await putStage(stageId, newData);
    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in the server");
  }
};
