const { Child } = require("../../DB");

module.exports = async ({id,firstName, lastName, gender, birthDate, age,UserId,StageId,ProgressId}) => {
  console.log(ProgressId);
  try {
    const create = await Child.create({
      id,
      firstName,
      lastName,
      gender,
      birthDate,
      age,
      UserId,
      StageId,
      ProgressId
    });
    return create;
  } catch (error) {
    console.log(error);
    throw new Error("Error in the server create");
  }
};
