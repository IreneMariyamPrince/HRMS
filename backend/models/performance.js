'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Performance.init({
    PerformanceID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    PerformanceReviewDate: DataTypes.DATE,
    PerformanceRating: DataTypes.DECIMAL,
    Goals: DataTypes.TEXT,
    Feedback: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Performance',
  });
  return Performance;
};