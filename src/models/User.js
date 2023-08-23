const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {//
    Nombre: {
      type: DataTypes.STRING,//setemos sus propiedades que los tipos de de datos que obtendra ,STRING UUID TEXT etc
    },
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4
    },
    firstName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    email_verified:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true
    },
    is_Admin:{
      type:DataTypes.STRING,
      allowNull:true
    }
  });
};
