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
         playlistId: 1,
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          name: 'HasanPiker',
          contentType: 'Chatting',
          schedule: 'a lot',
          img: 'https://i.ytimg.com/vi/qwMDOdR5MqQ/maxresdefault.jpg',
          playlistId: 2,
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
