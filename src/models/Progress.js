const { DataTypes } = require("sequelize");
const {
  firstVideoProgress,
  lastVideoProgress,
  testDefaultProgress,
  VideoProgress,
} = require("../Constants/ProgressConstants");
module.exports = async (sequelize) => {
  sequelize.define(
    "Progress",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Progress_Start: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      Pdf_Viewed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      First_Video: {
        type: DataTypes.JSON,
        defaultValue: firstVideoProgress(),
        allowNull: false,
      },
      Second_Video: {
        type: DataTypes.JSON,
        defaultValue: VideoProgress(),
        allowNull: false,
      },
      Third_Video: {
        type: DataTypes.JSON,
        defaultValue: VideoProgress(),
        allowNull: false,
      },
      Fourth_Video: {
        type: DataTypes.JSON,
        defaultValue: VideoProgress(),
        allowNull: false,
      },
      Fifth_Video: {
        type: DataTypes.JSON,
        defaultValue: lastVideoProgress(),
        allowNull: false,
      },
      Test_Status: {
        type: DataTypes.JSON,
        defaultValue: testDefaultProgress(),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: "updatedAt",
    }
  );
};
