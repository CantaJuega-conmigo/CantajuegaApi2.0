const {createUser}=require('../UserControllers')
const {createChild}=require('../ChildControllers')
const {fakeUsers,fakeChilds}=require('../../seed')
module.exports=()=>{
    fakeUsers.map(i=>{
        createUser(i)
    })
    fakeChilds.map(i=>{
        createChild(i)
    })
    
}