const { deleteStage } = require("../../controllers/StageControllers");

module.exports = async (req, res) => {
  const { id } = req.body;
  try {
    const deleted = await deleteStage(id);
    res.status(200).json({ message: "stage deleted", deleted });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in the server");
  }
};
