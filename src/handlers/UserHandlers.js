const {getUsers,createUser}=require('../controllers/UserControllers')

const getallUsers=(req,res)=>{
    const users=getUsers()
    res.send(users)
}
const createNewUser=()=>{
    console.log('me ejecuto');
    const info=createUser();
    return info
}

const deleteUsers=()=>{
    console.log('borrar');
    return 'borrado'
}
const editUsers=()=>{
    console.log('borrar');
    return 'borrado'
}
module.exports={
    getallUsers,
    createNewUser,
    deleteUsers,
    editUsers
}