'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.City,{foreignKey:'city_id'});
    }
  }
  Airport.init({
    name: DataTypes.STRING,
    unique: true,
    allowNull: false,
    address: DataTypes.STRING,
    city_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};