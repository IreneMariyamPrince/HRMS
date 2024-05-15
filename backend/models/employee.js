'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    EmployeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    UserID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Address: DataTypes.STRING,
    TelephoneNumber: DataTypes.STRING,
    JobRoleID: DataTypes.INTEGER,
    ManagerID: DataTypes.INTEGER,
    HireDate: DataTypes.DATE,
    BirthDate: DataTypes.DATE,
    BankDetails: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};