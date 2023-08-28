const { getStage } = require("../../controllers/StageControllers");

module.exports = async (req, res) => {
  try {
    const stage = await getStage();
    res.status(200).send(stage);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in the server" });
  }
};
