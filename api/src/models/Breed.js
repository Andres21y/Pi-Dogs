const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    min_Height: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    max_Height: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    min_Weight: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    max_Weight: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    life_span_max: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    life_span_min: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
