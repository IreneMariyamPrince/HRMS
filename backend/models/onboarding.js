'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Onboarding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Onboarding.init({
    OnboardingID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    Task: DataTypes.TEXT,
    CompletionStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Onboarding',
  });
  return Onboarding;
};