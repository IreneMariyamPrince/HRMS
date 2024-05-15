'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('123456789', 10); // Hash the password

    await queryInterface.bulkInsert('Users', [{
      UserID:1,
      Username: 'Admin',
      Email: 'admin@mail.com',
      Password: hashedPassword, // Save hashed password
      Role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
