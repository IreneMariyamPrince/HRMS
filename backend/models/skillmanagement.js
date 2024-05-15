'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SkillManagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SkillManagement.init({
    SkillID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    Skill: DataTypes.STRING,
    SkillRating: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'SkillManagement',
  });
  return SkillManagement;
};