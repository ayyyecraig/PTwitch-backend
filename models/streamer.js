'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Streamer extends Model {
 
    static associate(models) {

      Streamer.belongsTo(models.User, { foreignKey:'userId'})

    }
  }
  Streamer.init({
    name: DataTypes.STRING,
    userId:{ 
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'users',
        foreignKey: 'id'
      }
     },         
    contentType: DataTypes.STRING,
    schedule: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Streamer',
    tableName: 'streamers'
  });
  return Streamer;
};