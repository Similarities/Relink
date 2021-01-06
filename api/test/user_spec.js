import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import db from 'src/models/index';
import userFactory from "test/factories/user";

describe("User", () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });
  describe("create user", () => {
    it("finds create user", async () => {
      const uuid = uuidv4();
      const expected = await userFactory({ id: uuid });
      const actual = await db.User.findByPk(uuid);
      expect(actual.id).to.eql(expected.id);
      expect(actual.name).to.eql(expected.name);
      expect(actual.email).to.eql(expected.email);
      expect(actual.passwordDigest).to.eql(expected.passwordDigest);
      expect(actual.shortDescription).to.eql(expected.shortDescription);
      expect(actual.contactable).to.eql(expected.contactable);
      expect(actual.accessToken).to.eql(expected.accessToken);
      expect(actual.activationToken).to.eql(expected.activationToken);
      expect(actual.activatedAt).to.eql(expected.activatedAt);
      expect(actual.createdAt).to.eql(expected.createdAt);
      expect(actual.updatedAt).to.eql(expected.updatedAt);
    });
  });
});
