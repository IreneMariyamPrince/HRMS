'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeSelfService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployeeSelfService.init({
    SelfServiceID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    ServiceType: DataTypes.STRING,
    RequestStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EmployeeSelfService',
  });
  return EmployeeSelfService;
};