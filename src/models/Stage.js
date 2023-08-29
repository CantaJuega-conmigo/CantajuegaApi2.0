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
        allowNull: false,
      },
      minAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: true,
      },
      maxAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      child: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  )
}
