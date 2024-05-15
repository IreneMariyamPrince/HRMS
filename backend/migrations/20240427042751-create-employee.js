'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      EmployeeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },    
      UserID: {
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      TelephoneNumber: {
        type: Sequelize.STRING
      },
      JobRoleID: {
        type: Sequelize.INTEGER
      },
      ManagerID: {
        type: Sequelize.INTEGER
      },
      HireDate: {
        type: Sequelize.DATE
      },
      BirthDate: {
        type: Sequelize.DATE
      },
      BankDetails: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Employees');
  }
};