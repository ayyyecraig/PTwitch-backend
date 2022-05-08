'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          userId: 0,
          playlistId: 0,
          content: "poggers",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    )
  },

 down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
};