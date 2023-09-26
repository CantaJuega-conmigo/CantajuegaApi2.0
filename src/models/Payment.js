const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Payment",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      status:{
        type:DataTypes.ENUM("pending", "paid", "canceled", "failed", "expired"),
        defaultValue:"pending",
        allowNull:false
      },
      recurrente_Id: {
        type: DataTypes.STRING,
        allowNull:false
      },
      // checkout_url: {
      //   type: DataTypes.STRING,
      //   allowNull:false
      // },
      // date_Of_Creation:{
      //   type:DataTypes.DATE,
      //   defaultValue:DataTypes.NOW
      // },
      date_Of_Payment:{
        type:DataTypes.DATE,
        allowNull:true
      }
    },
  );
};
