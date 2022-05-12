'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    static associate(models) {
      // define association here

      User.hasMany(models.Streamer, {foreignKey: 'userId'})
      User.hasMany(models.Comment, { foreignKey:'userId'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};