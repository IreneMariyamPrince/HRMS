'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LearningDevelopment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LearningDevelopment.init({
    CourseID: DataTypes.INTEGER,
    CourseName: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LearningDevelopment',
  });
  return LearningDevelopment;
};