'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Training.init({
    TrainingID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    TrainingName: DataTypes.STRING,
    TrainingProvider: DataTypes.STRING,
    CompletionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};