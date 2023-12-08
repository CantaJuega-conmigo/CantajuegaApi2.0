const { Stage } = require("../../DB");
const { Op } = require("sequelize");
module.exports = async (age) => {

  if (age >= 0 && age <= 3) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 0 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 3 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 3 && age <= 6) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 3 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 6 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 6 && age <= 9) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 6 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 9 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 9 && age <= 12) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 9 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 12 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 12 && age <= 36) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 12 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 36 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 36 && age <= 48) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 36 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 48 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 48 && age <= 60) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 48 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 60 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else if (age >= 60 && age <= 72) {
    const stage = await Stage.findOne({
      where: {
        minAge: { [Op.gte]: 60 }, // minAge mayor o igual al número
        maxAge: { [Op.lte]: 72 }, // maxAge menor o igual al número
      },
    });
    return stage;
  } else {
    throw new Error("Ups La edad Maxima es 6 años");
  }
};
