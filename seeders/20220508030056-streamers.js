'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'streamers',
      [
        {
         name: 'PayMoneyWubby',
         userId: 2,
         contentType: 'Chatting',
         schedule: 'Sunday, Wednesday, Tuesday, West Coast',
         img: 'https://i.ytimg.com/vi/MsD83nwwu5I/maxresdefault.jpg',
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          name: 'HasanPiker',
          userId: 2,
          contentType: 'Chatting',
          schedule: 'a lot',
          img: 'https://i.ytimg.com/vi/qwMDOdR5MqQ/maxresdefault.jpg',
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
