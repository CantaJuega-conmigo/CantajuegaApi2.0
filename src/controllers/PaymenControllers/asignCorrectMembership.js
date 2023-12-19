const { User, Membership } = require("../../DB");
const { Op } = require("sequelize");
module.exports = async (user, subscription) => {
  try {
    if (!user.Membership) {
      if (subscription.description.toLowerCase().includes("trimestral")) {
        //trimestral membership
        const membership = await Membership.findOne({
          where: {
            name: {
              [Op.like]: "%trimestral",
            },
          },
        });
        if (!membership) throw new Error("Membership not found");
        await membership.addUser(user);
        return;
      }
      if (subscription.description.toLowerCase().includes("Mensual")) {
        //Mensual membership
        const membership = Membership.findOne({
          where: {
            name: {
              [Op.like]: "%Mensual",
            },
          },
        });
        if (!membership) throw new Error("Membership not found");
        await membership.addUser(user);
        return;
      }
      if (subscription.description.toLowerCase().includes("Anual")) {
        //Anual membership
        const membership = Membership.findOne({
          where: {
            name: {
              [Op.like]: "%Anual",
            },
          },
        });
        if (!membership) throw new Error("Membership not found");
        await membership.addUser(user);
        return;
      }
      if (subscription.description.toLowerCase().includes("Cancion")) {
        //trimestral membership
        const membership = Membership.findOne({
          where: {
            name: {
              [Op.like]: "%Cancion",
            },
          },
        });
        if (!membership) throw new Error("Membership not found");
        await membership.addUser(user);
        return;
      }
      return;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};
