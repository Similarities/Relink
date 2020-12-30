'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passwordDigest: {
        field: 'password_digest',
        type: Sequelize.STRING,
        allowNull: false
      },
      shortDescription: {
        field: 'short_description',
        type: Sequelize.STRING
      },
      contactable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      accessToken: {
        field: 'access_token',
        type: Sequelize.STRING,
        allowNull: false
      },
      activationToken: {
        field: 'activation_token',
        type: Sequelize.STRING,
        allowNull: false
      },
      activatedAt: {
        field: 'activated_at',
        type: Sequelize.DATE
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
