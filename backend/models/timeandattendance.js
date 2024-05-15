'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeAndAttendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TimeAndAttendance.init({
    AttendanceID:  {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    EmployeeID: DataTypes.INTEGER,
    Date: DataTypes.DATE,
    ClockInTime: DataTypes.TIME,
    ClockOutTime: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'TimeAndAttendance',
  });
  return TimeAndAttendance;
};