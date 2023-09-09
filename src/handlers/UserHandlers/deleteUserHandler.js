const { deleteUser } = require("../../controllers/UserControllers");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const deleting = await deleteUser(id);
    res.send("user deleted");
  } catch (error) {
    res.status(404).send({
      error:true,
      message:error.message??'Error in server.'
    });
  }
};
