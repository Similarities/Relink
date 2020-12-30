const faker = require('faker');
const db = require('../../models/index');
const { v4: uuidv4 } = require('uuid');

const userData = async (props = {}) => {
  const defaultProps = {
    id: uuidv4(),
    email: faker.internet.email(),
    name: faker.name.firstName(),
    passwordDigest: faker.internet.password(),
    shortDescription: faker.lorem.sentence(),
    contactable: false,
    accessToken: 'accesstoken',
    activationToken: 'activationtoken',
    activatedAt: Date.now(),
    createdAt: Date.now(),
    updatedAt: Date.now()
  };
  return Object.assign({}, defaultProps, props);
};

module.exports.userFactory = async (props = {}) =>
  db.User.create(await userData(props));
