'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Applicant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Applicant.init({
    ApplicantID: DataTypes.INTEGER,
    JobID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Address: DataTypes.STRING,
    TelephoneNumber: DataTypes.STRING,
    Email: DataTypes.STRING,
    Resume: DataTypes.STRING,
    ApplicationStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Applicant',
  });
  return Applicant;
};