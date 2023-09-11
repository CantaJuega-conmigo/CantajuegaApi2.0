const { Stage } = require("../../DB");

module.exports = async ({id,name, description, minAge, maxAge,UserId,content}) => {
  try {
    const create = await Stage.create({
      id,
      name,
      description,
      minAge,
      maxAge,
      UserId,
      content
    });
    return create;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server create");
  }
};
