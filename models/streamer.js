'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Streamer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Streamer.belongsTo(models.Playlist, {foreignKey:'playlistId'})
      Streamer.belongsTo(models.User, { foreignKey:'userId'})
   
    }
  }
  Streamer.init({
    name: DataTypes.STRING,
    userId:{ type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'users',
        foreignKey: 'id'
      }
     },         
    playlistId:{ type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'playlists',
        foreignKey:'id' 
      },
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