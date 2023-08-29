const { createStage } = require("../../controllers/StageControllers");

module.exports = async (req, res) => {
  const { name, description, minAge, maxAge } = req.body;

  try {
    const stage = await createStage(name, description, minAge, maxAge);

    return res.status(201).json(stage);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in the server" });
  }
};