const faker = require('faker');
import db  from 'src/models/index';
import { v4 as uuidv4 } from 'uuid';

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

export default async (props = {}) =>
  db.User.create(await userData(props));
