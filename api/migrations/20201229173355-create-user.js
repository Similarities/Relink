'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password_digest: {
        allowNull: false,
        type: Sequelize.STRING
      },
      short_description: {
        type: Sequelize.STRING
      },
      contactable: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      access_token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      activation_token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      activated_at: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};