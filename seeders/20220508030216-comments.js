'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          userId: 1,
          playlistId: 1,
          content: "poggers",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          playlistId: 2,
          content: "Based",
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