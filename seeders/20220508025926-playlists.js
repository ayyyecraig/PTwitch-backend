'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'playlists',
      [{
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      }]
    ) 
  },

 down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('playlists', null, {})
  }
};