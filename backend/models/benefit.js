'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Benefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Benefit.init({
    BenefitID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    BenefitType: DataTypes.STRING,
    Provider: DataTypes.STRING,
    EnrollmentDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Benefit',
  });
  return Benefit;
};