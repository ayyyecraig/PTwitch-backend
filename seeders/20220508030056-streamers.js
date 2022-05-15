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
         status: true,
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          name: 'HasanPiker',
          userId: 2,
          contentType: 'Chatting',
          schedule: 'a lot',
          img: 'https://i.ytimg.com/vi/qwMDOdR5MqQ/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          name: '3gerardpique',
          userId: 2,
          contentType: 'Chatting/ Gaming',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://d17umfmk0e27oh.cloudfront.net/articulos/articulos-998877.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Auronplay',
          userId: 2,
          contentType: 'Chatting/ Gaming - Grand Theft Auto V',
          schedule: '7 days a week',
          img: 'https://esports.as.com/2021/02/02/bonus/influencers/Auronplay_1434166580_576330_1440x600.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'WarCraft',
          userId: 2,
          contentType: 'World of Warcraft',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://www.filmofilia.com/wp-content/uploads/2015/11/Warcraft.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Pathofexile',
          userId: 2,
          contentType: 'Path of Exile',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://duckduckgo.com/?q=path+of+exile+twitch&t=chromentp&atb=v321-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fsiddgames.ru%2Fewr-porta%2Fattachments%2Fboxwu6n_1_-png.5836%2F',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Ibai',
          userId: 2,
          contentType: 'Gaming FIFA 22',
          schedule: '7 days a week',
          img: 'https://img.huffingtonpost.com/asset/6022bf7d260000220bc239e6.png?cache=AZWFt58Vg9&ops=1200_630',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Dream',
          userId: 2,
          contentType: 'Gaming-Minecraft/ Just Chatting',
          schedule: 'Saturday, Friday, Wednesday',
          img: 'https://i.ytimg.com/vi/axVmJ15GO18/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Juansguarnizo',
          userId: 2,
          contentType: 'Gaming/ Just Chatting',
          schedule: '7 days a week',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/74586414-e27b-4347-89c5-109e42ac3e1d-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'CDawgVA',
          userId: 2,
          contentType: 'Gaming-Granny Simulator/ Just Chatting',
          schedule: '7 days a week',
          img: 'https://healthyceleb.com/wp-content/uploads/2020/12/CDawgVA-as-seen-in-a-picture-that-was-taken-in-December-2020.jpg',
          status: true,
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
