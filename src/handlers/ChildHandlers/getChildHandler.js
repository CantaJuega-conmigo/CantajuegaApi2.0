const { getChild } = require("../../controllers/ChildControllers");

module.exports = async (req, res) => {
  try {
    const child = await getChild();
    res.status(200).send(child);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in the server" });
  }
};
