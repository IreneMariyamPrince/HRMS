/* eslint-env es6 */
const { Sequelize, Op } = require('sequelize');
const config = require('./config/config.json');
const UserModel = require('./models/user');
const EmployeeModel = require('./models/employee');
const JobRoleModel = require('./models/jobRole');
const DepartmentModel = require('./models/department');
const LeaveModel = require('./models/leavemanagement');
const TimeAndAttendanceModel = require('./models/timeandattendance');

const dbConfig = config.development;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  timezone: '+05:30', // Adjust according to your timezone
});

// Define models
const User = UserModel(sequelize, Sequelize);
const Employee = EmployeeModel(sequelize, Sequelize);
const JobRole = JobRoleModel(sequelize, Sequelize);
const Department = DepartmentModel(sequelize, Sequelize);
const Leave = LeaveModel(sequelize, Sequelize);
const TimeAndAttendance = TimeAndAttendanceModel(sequelize, Sequelize);

// Define associations
User.hasOne(Employee, { foreignKey: 'UserID' }); // User has one Employee
Employee.belongsTo(User, { foreignKey: 'UserID' }); // Employee belongs to one User

Employee.belongsTo(JobRole, { foreignKey: 'JobRoleID' }); // Employee belongs to one JobRole
JobRole.hasMany(Employee, { foreignKey: 'JobRoleID' }); // JobRole has many Employees

JobRole.belongsTo(Department, { foreignKey: 'DepartmentID' }); // JobRole belongs to one Department
Department.hasMany(JobRole, { foreignKey: 'DepartmentID' }); // Department has many JobRoles

Leave.belongsTo(Employee, { foreignKey: 'EmployeeID' }); // Leave belongs to one Employee
Employee.hasMany(Leave, { foreignKey: 'EmployeeID' }); // Employee has many Leaves

TimeAndAttendance.belongsTo(Employee, { foreignKey: 'EmployeeID' }); // TimeAndAttendance belongs to one Employee
Employee.hasMany(TimeAndAttendance, { foreignKey: 'EmployeeID' }); // Employee has many TimeAndAttendances

module.exports = {
  sequelize,
  Op,
  User,
  Employee,
  JobRole,
  Department,
  Leave,
  TimeAndAttendance
};
