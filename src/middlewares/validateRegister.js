const { getObjectAtributtes } = require("../utils");
module.exports = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const correctAtributtes = ["firstName", "lastName", "email", "password"];
  const MissingAtributtes = correctAtributtes.filter((i) => !req.body[i]);
  const bodyAtributtes = getObjectAtributtes(req.body);
  const incorrectAtributtes = bodyAtributtes.filter(
    (item, index) => item !== correctAtributtes[index]
  );

  try {
    if (incorrectAtributtes.length) {
      throw new Error(
        `${incorrectAtributtes},${
          incorrectAtributtes.length > 1
            ? "are incorrect attributes"
            : "is an incorrect attribute"
        }`
      );
    }
    if (!firstName || !lastName || !email || !password) {
      throw new Error(
        `${MissingAtributtes} ${
          MissingAtributtes.length > 1 ? "are" : "is"
        } necessary.`
      );
    }
    next();
  } catch (error) {
    res.status(400).send({
      error: true,
      message: error.message ?? "Error in server.",
    });
  }
};
