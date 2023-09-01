const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Report", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_Resolved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    // Date_Created: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: false,
    // },
    Response: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
