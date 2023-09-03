const { createUser,getUsers } = require("../UserControllers");
const { createChild } = require("../ChildControllers");
const { createStage } = require("../StageControllers");
const {createMembership} = require("../MembershipContollers");
const {createProgress} = require("../ProgressControllers");
const {createReport} = require("../ReportControllers");
const { fakeUsers, fakeChilds,fakeStages,fakeMemberships} = require("../../seed");
module.exports = async () => {
  //creamos datos falsos
   const validateSeed=await getUsers()
   if(!validateSeed.length){

     for (let i = 0; i < fakeUsers.length; i++) {
   
       const newProgress=await createProgress()
       const report=`hola soy ${fakeUsers[i].firstName} y quiero reportar que tengo un problema en...`
       await createMembership(fakeMemberships[i])
       fakeUsers[i].MembershipId=fakeMemberships[i].id
       await createUser(fakeUsers[i]);
       fakeChilds[i].UserId=fakeUsers[i].id
       await createStage(fakeStages[i])
       fakeChilds[i].StageId=fakeStages[i].id
       fakeChilds[i].ProgressId=newProgress.id
       await createChild(fakeChilds[i]);
       await createReport({Description:report,UserId:fakeUsers[i].id})
     }
   }
   return validateSeed
};
