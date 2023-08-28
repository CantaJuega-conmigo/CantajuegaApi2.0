const { Stage } = require("../../DB");

module.exports = async (name, description, minAge, maxAge) => {
  try {
    const create = await Stage.create({
      name,
      description,
      minAge,
      maxAge,
    });
    return create;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server create");
  }
};
