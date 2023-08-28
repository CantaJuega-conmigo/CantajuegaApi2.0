const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("User", {
    //
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minAge: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    maxAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    child: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
};
