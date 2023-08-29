const { DataTypes } = require("sequelize");
<<<<<<< HEAD

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
=======
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Stage", {
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
    child: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true,
    },
  });
>>>>>>> Axel-branch
};
