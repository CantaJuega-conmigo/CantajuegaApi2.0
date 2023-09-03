const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Membership",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text1: {
        type: DataTypes.STRING,
      },
      text2: {
        type: DataTypes.STRING,
      },
      text3: {
        type: DataTypes.STRING,
      },
      recurrenteId:{
        type:DataTypes.STRING,
        allowNull:false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false,
    }
  );
};
