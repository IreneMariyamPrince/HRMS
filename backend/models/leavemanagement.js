'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeaveManagement.init({
    LeaveID: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    EmployeeID: DataTypes.INTEGER,
    LeaveType: DataTypes.STRING,
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    ApprovalStatus: DataTypes.STRING,
    ApprovalDate: DataTypes.DATE,
    ApprovalBy: DataTypes.INTEGER,
    Reason: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'LeaveManagement',
  });
  return LeaveManagement;
};