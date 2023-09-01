const {v4:uuidv4}=require('uuid')

const userSeed= [
    {
        id:uuidv4(),
        firstName: 'Juan',
        lastName: 'Perez',
        email: 'Test@gmail.com',
        phone: '1234567890',
        emailVerified: false,
        password: 'Test1234',
    },
    {
        id:uuidv4(),
        firstName: 'Maria',
        lastName: 'Perez',
        email: 'Test1@gmail.com',
        phone: '1234567891',
        emailVerified: false,
        password: 'Test1234',
    },
    {
        id:uuidv4(),
        firstName: 'Pedro',
        lastName: 'Perez',
        email: 'Test2@gmail.com',
        phone: '1234567892',
        emailVerified: false,
        password: 'Test1234',
    },
    { 
        id:uuidv4(),
        firstName: 'joaquin',
        lastName: 'garcia',
        email: 'joakig6@gmail.com',
        phone: '1234567892',
        emailVerified: false,
        password: 'Test1234',
    },
]

module.exports=userSeed