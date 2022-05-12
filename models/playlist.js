'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
  
   
      Playlist.belongsTo(models.User, { foreignKey:'userId'})
      Playlist.hasMany(models.Streamer, {foreignKey:'playlistId'})
    }
  }
  Playlist.init({
    userId:{ type:DataTypes.INTEGER,
              onDelete:'CASCADE',
              references: {
                model: 'users',
                foreignKey: 'id'
              }
             },
    name: DataTypes.STRING              
  }, {
    sequelize,
    modelName: 'Playlist',
    tableName:'playlists'
  });
  return Playlist;
};

