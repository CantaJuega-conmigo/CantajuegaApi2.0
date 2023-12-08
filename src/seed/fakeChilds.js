const {v4:uuidv4}=require('uuid')
const Gender={
  male:'male',
  female:'female'
}
module.exports = [
  {
    id:uuidv4(),
    firstName: "Juan",
    lastName: "Perez",
    age:5,
    birthDate:'25/12/2017',
    gender: Gender.male,
  },
  {
    id:uuidv4(),
    firstName: "Maria",
    lastName: "Perez",
    age:5,
    birthDate:'01/01/2018',
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Rogelia",
    lastName: "Perez",
    age:5,
    birthDate:'01/09/2019',
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Pancrasia",
    lastName: "Perez",
    age:5,
    birthDate:'01/02/2020',
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Juan",
    lastName: "Perez",
    age:5,
    birthDate:'01/09/2021',
    gender: Gender.male,
  },
  {
    id:uuidv4(),
    firstName: "Maria",
    lastName: "Perez",
    age:5,
    birthDate:'01/06/2022',
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Rogelia",
    lastName: "Perez",
    age:5,
    birthDate:'01/06/2023',
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Pancrasia",
    lastName: "Perez",
    age:5,
    birthDate:'01/02/2023',
    gender: Gender.female,
  },
];

