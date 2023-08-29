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
      status: DataTypes.ENUM("pending", "paid", "canceled", "failed", "expired"),
      recurrenteId: {
        type: DataTypes.STRING,
      },
      checkoutUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
