const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Stage",
    {
      //
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      minAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      maxAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.JSONB(DataTypes.ARRAY),
        validate: {
          validatePropertys: function (value) {//validations to add info about videos and music content in db
            const neccesary = ["pdf", "videos"];
            if (typeof value !== "object")
              throw new Error("The value of content, must be an object");
            neccesary.forEach((i) => {
              if (!value.hasOwnProperty(i))
                throw new Error(`Missing atributte: ${i}`); 
              if (i !== "pdf" && !Array.isArray(value[i]))
                throw new Error(`${i} must be an array of object`);
            });
          },
        },
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
