'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
  
    static associate(models) {

     Comment.belongsTo( models.Streamer, { foreignKey:'streamerId'})
    
    }
  }
  Comment.init({
    userId:{ type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'users',
        foreignKey: 'id'
      }
     },
    streamerId:{type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references: {
        model: 'users',
        foreignKey: 'id'
      }
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};