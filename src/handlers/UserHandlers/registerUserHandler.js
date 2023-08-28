const { createUser } = require("../../controllers/UserControllers");

module.exports = async (req, res) => {
  const info = await createUser(req.body);
  res.status(201).send(info);
};
