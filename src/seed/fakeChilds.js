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
    birthDate: new Date("2020-01-01"),
    gender: Gender.male,
  },
  {
    id:uuidv4(),
    firstName: "Maria",
    lastName: "Perez",
    age:5,
    birthDate: new Date("2023-01-01"),
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Rogelia",
    lastName: "Perez",
    age:5,
    birthDate: new Date("2023-01-01"),
    gender: Gender.female,
  },
  {
    id:uuidv4(),
    firstName: "Pancrasia",
    lastName: "Perez",
    age:5,
    birthDate: new Date("2023-01-01"),
    gender: Gender.female,
  },
];

