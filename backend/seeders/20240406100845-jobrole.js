"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const currentDate = new Date();
    await queryInterface.bulkInsert(
      "JobRoles",
      [
        {
          JobRole: "HR Manager",
          DepartmentID: 1,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "HR Coordinator",
          DepartmentID: 1,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Recruitment Specialist",
          DepartmentID: 1,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Training and Development Officer",
          DepartmentID: 1,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Compensation and Benefits Specialist",
          DepartmentID: 1,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Finance
        {
          JobRole: "Financial Analyst",
          DepartmentID: 2,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Accountant",
          DepartmentID: 2,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Finance Manager",
          DepartmentID: 2,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Accounts Payable Clerk",
          DepartmentID: 2,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Tax Specialist",
          DepartmentID: 2,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Marketing
        {
          JobRole: "Marketing Manager",
          DepartmentID: 3,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Marketing Coordinator",
          DepartmentID: 3,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Digital Marketing Specialist",
          DepartmentID: 3,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Brand Manager",
          DepartmentID: 3,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Social Media Manager",
          DepartmentID: 3,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Engineering
        {
          JobRole: "Software Engineer",
          DepartmentID: 4,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Mechanical Engineer",
          DepartmentID: 4,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Electrical Engineer",
          DepartmentID: 4,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Project Manager (Engineering)",
          DepartmentID: 4,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Quality Assurance Engineer",
          DepartmentID: 4,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Customer Service
        {
          JobRole: "Customer Service Representative",
          DepartmentID: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Customer Success Manager",
          DepartmentID: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Technical Support Specialist",
          DepartmentID: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Call Center Supervisor",
          DepartmentID: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Client Relations Manager",
          DepartmentID: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Information Technology
        {
          JobRole: "IT Manager",
          DepartmentID: 6,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Systems Administrator",
          DepartmentID: 6,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Network Engineer",
          DepartmentID: 6,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Software Developer",
          DepartmentID: 6,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Database Administrator",
          DepartmentID: 6,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Sales
        {
          JobRole: "Sales Representative",
          DepartmentID: 7,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Sales Manager",
          DepartmentID: 7,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Account Executive",
          DepartmentID: 7,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Business Development Manager",
          DepartmentID: 7,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Sales Coordinator",
          DepartmentID: 7,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Operations
        {
          JobRole: "Operations Manager",
          DepartmentID: 8,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Operations Coordinator",
          DepartmentID: 8,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Supply Chain Analyst",
          DepartmentID: 8,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Logistics Coordinator",
          DepartmentID: 8,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Warehouse Manager",
          DepartmentID: 8,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Research and Development
        {
          JobRole: "Research Scientist",
          DepartmentID: 9,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Development Engineer",
          DepartmentID: 9,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "R&D Manager",
          DepartmentID: 9,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Product Research Analyst",
          DepartmentID: 9,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Innovation Specialist",
          DepartmentID: 9,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Quality Assurance
        {
          JobRole: "Quality Assurance Analyst",
          DepartmentID: 10,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "QA Engineer",
          DepartmentID: 10,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "QA Manager",
          DepartmentID: 10,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Compliance Officer",
          DepartmentID: 10,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Quality Control Inspector",
          DepartmentID: 10,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Product Management:
        {
          JobRole: "Product Manager",
          DepartmentID: 11,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Product Owner",
          DepartmentID: 11,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Product Marketing Manager",
          DepartmentID: 11,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Product Development Manager",
          DepartmentID: 11,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Product Analyst",
          DepartmentID: 11,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Legal
        {
          JobRole: "Legal Counsel",
          DepartmentID: 12,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Paralegal",
          DepartmentID: 12,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Legal Assistant",
          DepartmentID: 12,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Contract Specialist",
          DepartmentID: 12,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Compliance Manager",
          DepartmentID: 12,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Supply Chain
        {
          JobRole: "Supply Chain Manager",
          DepartmentID: 13,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Procurement Specialist",
          DepartmentID: 13,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Logistics Manager",
          DepartmentID: 13,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Inventory Analyst",
          DepartmentID: 13,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Supply Chain Coordinator",
          DepartmentID: 13,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Administration
        {
          JobRole: "Administrative Assistant",
          DepartmentID: 14,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Office Manager",
          DepartmentID: 14,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Executive Assistant",
          DepartmentID: 14,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Administrative Coordinator",
          DepartmentID: 14,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Office Administrator",
          DepartmentID: 14,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Training and Development
        {
          JobRole: "Training Manager",
          DepartmentID: 15,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Learning and Development Specialist",
          DepartmentID: 15,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Training Coordinator",
          DepartmentID: 15,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Instructional Designer",
          DepartmentID: 15,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Training Facilitator",
          DepartmentID: 15,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Accounting
        {
          JobRole: "Chief Financial Officer (CFO)",
          DepartmentID: 16,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Accounts Receivable Clerk",
          DepartmentID: 16,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Payroll Specialist",
          DepartmentID: 16,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Billing Coordinator",
          DepartmentID: 16,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Cost Accountant",
          DepartmentID: 16,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Customer Success
        {
          JobRole: "Customer Success Specialist",
          DepartmentID: 17,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Client Onboarding Manager",
          DepartmentID: 17,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Renewals Manager",
          DepartmentID: 17,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Customer Experience Coordinator",
          DepartmentID: 17,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Customer Success Director",
          DepartmentID: 17,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Public Relations
        {
          JobRole: "Public Relations Manager",
          DepartmentID: 18,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Public Relations Specialist",
          DepartmentID: 18,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Communications Coordinator",
          DepartmentID: 18,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Media Relations Manager",
          DepartmentID: 18,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Press Officer",
          DepartmentID: 18,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Health and Safety
        {
          JobRole: "Health and Safety Officer",
          DepartmentID: 19,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Safety Coordinator",
          DepartmentID: 19,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Environmental Health Specialist",
          DepartmentID: 19,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Occupational Health Manager",
          DepartmentID: 19,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Safety Engineer",
          DepartmentID: 19,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Business Development
        {
          JobRole: "Business Development Executive",
          DepartmentID: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Partnership Manager",
          DepartmentID: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Sales Development Representative",
          DepartmentID: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Strategic Account Manager",
          DepartmentID: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Business Development Analyst",
          DepartmentID: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Design
        {
          JobRole: "Graphic Designer",
          DepartmentID: 21,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "UX/UI Designer",
          DepartmentID: 21,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Creative Director",
          DepartmentID: 21,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Web Designer",
          DepartmentID: 21,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Visual Designer",
          DepartmentID: 21,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Research
        {
          JobRole: "Research Analyst",
          DepartmentID: 22,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Market Researcher",
          DepartmentID: 22,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Data Scientist",
          DepartmentID: 22,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Research Coordinator",
          DepartmentID: 22,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Research Assistant",
          DepartmentID: 22,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Logistics
        {
          JobRole: "Logistics Coordinator",
          DepartmentID: 23,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Distribution Manager",
          DepartmentID: 23,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Freight Forwarder",
          DepartmentID: 23,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Transportation Planner",
          DepartmentID: 23,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Warehouse Supervisor",
          DepartmentID: 23,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Facilities Management
        {
          JobRole: "Facilities Manager",
          DepartmentID: 24,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Building Maintenance Technician",
          DepartmentID: 24,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Facilities Coordinator",
          DepartmentID: 24,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Property Manager",
          DepartmentID: 24,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Facilities Engineer",
          DepartmentID: 24,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Positions for Event Planning
        {
          JobRole: "Event Coordinator",
          DepartmentID: 25,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Event Manager",
          DepartmentID: 25,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Meeting Planner",
          DepartmentID: 25,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Wedding Planner",
          DepartmentID: 25,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          JobRole: "Conference Organizer",
          DepartmentID: 25,
          createdAt: currentDate,
          updatedAt: currentDate,
        },

        // Add more positions as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Positions", null, {});
  },
};
