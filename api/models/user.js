'use strict';
const { Sequelize } = require('sequelize');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password_digest: { type: DataTypes.STRING, allowNull: false },
    short_description: { type: DataTypes.STRING },
    contactable: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    access_token: { type: DataTypes.STRING, allowNull: false },
    activation_token: { type: DataTypes.STRING, allowNull: false },
    activated_at: { type: DataTypes.DATE },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};