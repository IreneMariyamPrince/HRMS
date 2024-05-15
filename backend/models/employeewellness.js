'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeWellness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeWellness.init({
    WellnessID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    WellnessProgramName: DataTypes.STRING,
    ParticipationStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeWellness',
  });
  return EmployeeWellness;
};