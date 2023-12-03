const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("MusicPlaylist", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
};
