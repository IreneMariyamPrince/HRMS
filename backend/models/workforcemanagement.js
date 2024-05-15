'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkforceManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkforceManagement.init({
    ScheduleID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    ShiftStartTime: DataTypes.DATE,
    ShiftEndTime: DataTypes.DATE,
    ShiftType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkforceManagement',
  });
  return WorkforceManagement;
};