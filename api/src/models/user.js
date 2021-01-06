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
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordDigest: {
      field: 'password_digest',
      type: DataTypes.STRING,
      allowNull: false
    },
    shortDescription: {
      field: 'short_description',
      type: DataTypes.STRING
    },
    contactable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    accessToken: {
      field: 'access_token',
      type: DataTypes.STRING,
      allowNull: false
    },
    activationToken: {
      field: 'activation_token',
      type: DataTypes.STRING,
      allowNull: false
    },
    activatedAt: {
      field: 'activated_at',
      type: DataTypes.DATE
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
