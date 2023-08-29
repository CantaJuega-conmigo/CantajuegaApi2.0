const { Child } = require("../../DB");

module.exports = async (firstName, lastName, gender, birthDate, age) => {
  try {
    const create = await Child.create({
      firstName,
      lastName,
      gender,
      birthDate,
      age,
    });
    return create;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server create");
  }
};
