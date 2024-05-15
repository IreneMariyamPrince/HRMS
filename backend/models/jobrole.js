'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobRole.init({
    JobRoleID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    JobRole: DataTypes.STRING,
    DepartmentID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JobRole',
  });
  return JobRole;
};