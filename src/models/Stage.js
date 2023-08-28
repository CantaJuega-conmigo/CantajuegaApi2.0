const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Stage",
    {
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
        type: DataTypes.TEXT,
      },
      minAge: {
        type: DataTypes.INTEGER,
      },
      maxAge: {
        type: DataTypes.INTEGER,
      },
      child: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      }
    },
    {
      timestamps: false,
    }
  );
};
