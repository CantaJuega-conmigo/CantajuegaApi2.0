const { createUser } = require("../UserControllers");
const { createChild } = require("../ChildControllers");
const { createStage } = require("../StageControllers");
// const { createMemberships } = require("../");
const { fakeUsers, fakeChilds,fakeStages,fakeMemberships} = require("../../seed");
module.exports = async () => {
  //creamos datos falsos

  for (let i = 0; i < fakeUsers.length; i++) {
    
    await createUser(fakeUsers[i]);
    fakeChilds[i].UserId=fakeUsers[i].id
    await createStage(fakeStages[i])
    fakeChilds[i].StageId=fakeStages[i].id
    await createChild(fakeChilds[i]);
  }
};
