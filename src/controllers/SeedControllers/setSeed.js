const { createUser, getUsers } = require("../UserControllers");
const { createChild } = require("../ChildControllers");
const { fakeUsers, fakeChilds } = require("../../seed");
module.exports = async () => {
  //creamos datos falsos

  for (let i = 0; i < fakeUsers.length; i++) {
    await createUser(fakeUsers[i]);
    fakeChilds[i].UserId=fakeUsers[i].id
    await createChild(fakeChilds[i]);
  }
};
