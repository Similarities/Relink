'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
    Array.from({ length: 50 }, () => {
        const user = {};
        user['id'] = faker.random.uuid();
        user['name'] = faker.internet.userName();
        user['email'] = faker.internet.email();
        user['password_digest'] = faker.internet.password();
        user['short_description'] = faker.lorem.sentence();
        user['contactable'] = faker.random.boolean();
        user['access_token'] = faker.random.alphaNumeric();
        user['activation_token'] = faker.random.alphaNumeric();
        user['activated_at'] = faker.date.past();
        user['created_at'] = faker.date.past();
        user['updated_at'] = faker.date.recent();
        return user;
      })
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
