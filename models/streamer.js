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
      // define association here
      Streamer.belongsTo(models.Playlist, {foreignKey:'playlistId'})
    
    }
  }
  Streamer.init({
    name: DataTypes.STRING,
    contentType: DataTypes.STRING,
    schedule: DataTypes.STRING,
    img: DataTypes.STRING,
    playlistId:{
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'playlists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Streamer',
    tableName:'streamers'
  });
  return Streamer;
};