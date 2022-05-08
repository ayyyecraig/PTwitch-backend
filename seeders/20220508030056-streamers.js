'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'streamers',
      [
        {
         name: 'PayMoneyWubby',
         contentType: 'Chatting',
         schedule: 'Sunday, Wednesday, Tuesday, West Coast',
         img: 'https://i.ytimg.com/vi/MsD83nwwu5I/maxresdefault.jpg',
         playlistId: 0,
         createdAt: new Date(),
         updatedAt: new Date() 
        }
      ]
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('streamers', null, {})
  }
};
