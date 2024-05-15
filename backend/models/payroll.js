'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payroll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payroll.init({
    PayrollID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    Salary: DataTypes.DECIMAL,
    Taxes: DataTypes.DECIMAL,
    Deductions: DataTypes.DECIMAL,
    PaymentDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payroll',
  });
  return Payroll;
};