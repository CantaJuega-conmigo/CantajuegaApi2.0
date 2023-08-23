const {
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/UserControllers");

const getallUsers = async (req, res) => {
  const users = await getUsers();
  res.status(200).send(users);
};

const createNewUser = async (req, res) => {
  const info = await createUser(req.body);
  res.status(201).send(info);
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const deleting = await deleteUser(id);
    res.send("user deleted");
  } catch (error) {
    res.status(404).send("error");
  }
};

const editUsers = () => {
  console.log("borrar");
  return "borrado";
};
module.exports = {
  getallUsers,
  createNewUser,
  deleteUsers,
  editUsers,
};
