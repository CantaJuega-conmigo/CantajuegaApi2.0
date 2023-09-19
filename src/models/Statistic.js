const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
  sequelize.define(
    'Statistic',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      Total_Users: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultvalue: 0,
      },
      Total_Stages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Total_Memberships: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Total_Childs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Stages_Completed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Stages_In_Progress: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Total_Reports: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      Memberships_Actives: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );
};
