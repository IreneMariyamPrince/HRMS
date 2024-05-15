"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();

    await queryInterface.bulkInsert(
      "Departments",
      [
        { DepartmentName: "Human Resources", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Finance", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Marketing", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Engineering", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Customer Service", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Information Technology", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Sales", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Operations", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Research and Development", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Quality Assurance", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Product Management", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Legal", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Supply Chain", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Administration", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Training and Development", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Accounting", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Customer Success", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Public Relations", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Health and Safety", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Business Development", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Design", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Research", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Logistics", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Facilities Management", createdAt: currentDate, updatedAt: currentDate },
        { DepartmentName: "Event Planning", createdAt: currentDate, updatedAt: currentDate },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Departments", null, {});
  },
};
