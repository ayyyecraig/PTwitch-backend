'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
         userId: 1,
         streamerId: 2,
         content: 'Based AF',
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          userId: 1,
          streamerId: 1,
          content: 'SHEEEESSHHHH',
          createdAt: new Date(),
          updatedAt: new Date() 
         }
        ]
    )
  },

 down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
};