const { Child, User } = require("../../DB");
const { createToken } = require("../../auth");
const { createChild } = require("../ChildControllers");
const createUser = require("./createUser");
module.exports = async (Userdata, ChildData) => {
  let cacheUser;
  try {
    if (!Userdata || !ChildData) {
      throw new Error("Incomplete data");
    }
    const UserCreated = await createUser(Userdata);
    cacheUser = UserCreated;
    if (!UserCreated || !UserCreated.id)
      throw new Error("Error when creating user");
    ChildData.UserId = UserCreated.id; //relation user-child
    const ChildCreated = await createChild(ChildData);
    if (!ChildCreated) {
      await User.destroy({ where: { id: UserCreated.id } });
      throw new Error("Error when creating child");
    }
    const Token = createToken(UserCreated, "1d");

    return {
      token: Token,
      user: UserCreated,
    };
  } catch (error) {
    if (cacheUser) {
      await User.destroy({ where: { id: cacheUser.id } });
    }
    throw new Error(`Error en el servidor 'registerUser': ${error.message}`);
  }
};
