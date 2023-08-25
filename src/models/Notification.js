const { DataTypes } = require("sequelize");

module.exports = async (sequelize) => {
  sequelize.define("Notification", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    notification_type: {
      type: DataTypes.ENUM("Report", "Request"),
      allowNull: false,
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:false
    },
  });
};
