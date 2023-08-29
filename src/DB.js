require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/cantajuega_conmigo`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

console.log(sequelize.models);
const { User, Child, Membership, Stage, Payment, Report, Notification, Progress } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
//  Dog.belongsToMany(Temperament,{through:"dog_temperament"} )
//  Temperament.belongsToMany(Dog,{through:"dog_temperament"})
// console.log(User)


// Aca vendrian las relaciones

// User N a 1 Payment => se crea columna 'userId' en Payment 
User.hasMany(Payment);
Payment.belongsTo(User);

// User N a 1 Membership => se crea columna 'userID' en Membership
Membership.hasMany(User);
User.belongsTo(Membership);

// Child N a 1 User
User.hasMany(Child);
Child.belongsTo(User);

// Child N a 1 Stage
Stage.hasMany(Child);
Child.belongsTo(Stage);

User.hasMany(Report);//usuario puede tener muchos reportes
Report.belongsTo(User)//un reporte pertenece solo a un usuario
Report.hasOne(Notification);//un reporte puede generar solo una notificacion a la vez
Notification.belongsTo(Report)//una sola notificacion puede tener un solo reporte

console.log(User, Report, Progress); // si alguno da undefined, revisar el modelo
// Aca vendrian las relaciones
User.hasMany(Report); //usuario puede tener muchos reportes
Report.belongsTo(User); //un reporte pertenece solo a un usuario
Report.hasOne(Notification); //un reporte puede generar solo una notificacion a la vez
Notification.belongsTo(Report); //una sola notificacion puede tener un solo reporte
// Stage.hasMany();
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
