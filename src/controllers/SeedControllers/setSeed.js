const { createUser } = require("../UserControllers");
const { createChild } = require("../ChildControllers");
const { createStage } = require("../StageControllers");
const {createMembership} = require("../MembershipContollers");
const { fakeUsers, fakeChilds,fakeStages,fakeMemberships} = require("../../seed");
module.exports = async () => {
  //creamos datos falsos

  for (let i = 0; i < fakeUsers.length; i++) {
    await createMembership(fakeMemberships[i])
    fakeUsers[i].MembershipId=fakeMemberships[i].id
    await createUser(fakeUsers[i]);
    fakeChilds[i].UserId=fakeUsers[i].id
    await createStage(fakeStages[i])
    fakeChilds[i].StageId=fakeStages[i].id
    await createChild(fakeChilds[i]);
  }
};
