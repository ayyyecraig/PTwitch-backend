'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'streamers',
      [
        {
         name: 'PayMoneyWubby',
         userId: 0,
         contentType: 'Chatting',
         schedule: 'Sunday, Wednesday, Tuesday, West Coast',
         img: 'https://i.ytimg.com/vi/MsD83nwwu5I/maxresdefault.jpg',
         status: true,
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          name: 'HasanPiker',
          userId: 0,
          contentType: 'Chatting',
          schedule: 'a lot',
          img: 'https://i.ytimg.com/vi/qwMDOdR5MqQ/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date() 
         },
         {
          name: '3gerardpique',
          userId: 0,
          contentType: 'Chatting/ Gaming',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://d17umfmk0e27oh.cloudfront.net/articulos/articulos-998877.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Auronplay',
          userId: 0,
          contentType: 'Chatting/ Gaming - Grand Theft Auto V',
          schedule: '7 days a week',
          img: 'https://esports.as.com/2021/02/02/bonus/influencers/Auronplay_1434166580_576330_1440x600.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'WarCraft',
          userId: 0,
          contentType: 'World of Warcraft',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://www.filmofilia.com/wp-content/uploads/2015/11/Warcraft.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Pathofexile',
          userId: 0,
          contentType: 'Path of Exile',
          schedule: 'Unlikely to stream on Saturdays',
          img: 'https://duckduckgo.com/?q=path+of+exile+twitch&t=chromentp&atb=v321-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fsiddgames.ru%2Fewr-porta%2Fattachments%2Fboxwu6n_1_-png.5836%2F',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Ibai',
          userId: 0,
          contentType: 'Gaming FIFA 22',
          schedule: '7 days a week',
          img: 'https://img.huffingtonpost.com/asset/6022bf7d260000220bc239e6.png?cache=AZWFt58Vg9&ops=1200_630',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Dream',
          userId: 0,
          contentType: 'Gaming-Minecraft/ Just Chatting',
          schedule: 'Saturday, Friday, Wednesday',
          img: 'https://i.ytimg.com/vi/axVmJ15GO18/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Juansguarnizo',
          userId: 0,
          contentType: 'Gaming/ Just Chatting',
          schedule: '7 days a week',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/74586414-e27b-4347-89c5-109e42ac3e1d-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'CDawgVA',
          userId: 0,
          contentType: 'Gaming-Granny Simulator/ Just Chatting',
          schedule: 'Casually 7 days a week',
          img: 'https://healthyceleb.com/wp-content/uploads/2020/12/CDawgVA-as-seen-in-a-picture-that-was-taken-in-December-2020.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: '슈카월드 (torona1)',
          userId: 0,
          contentType: 'Just Chatting',
          schedule: 'Sundays',
          img: 'https://duckduckgo.com/?q=+%EC%8A%88%EC%B9%B4%EC%9B%94%EB%93%9C+(torona1)+twitch&t=chromentp&atb=v321-1&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2Fefa02ddd-0973-491c-b69e-3158966f956b-profile_image-300x300.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Gaules',
          userId: 0,
          contentType: 'Gaming- Counter-Strike/ Just Chatting, Sports',
          schedule: 'Streams all day Saturdays',
          img: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/01/d8ksegvwkaa4fhl.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'otplol_',
          userId: 0,
          contentType: 'Gaming- League of Legends, Sports',
          schedule: 'All day Everyday',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/787bd9dd-9367-45ed-a44d-d755427549b8-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'CBLOL',
          userId: 0,
          contentType: 'Unlikely to stream on Monday',
          schedule: 'Daily',
          img: 'https://i.ytimg.com/vi/mit11oEmOlQ/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'tarik',
          userId: 0,
          contentType: 'Gaming - VALORANT, Clah of Clans',
          schedule: 'Daily',
          img: 'https://i.ytimg.com/vi/b27tIc2Y8KE/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'aminemature',
          userId: 0,
          contentType: 'Gaming - The Sims 4, Just Chatting, Poppy Playtime',
          schedule: 'Unlikely to stream on Saturday',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/13e55cbe-a1b0-4f4c-b69b-2748274b9e48-profile_image-600x600.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'TenZ',
          userId: 0,
          contentType: 'Gaming - VALORANT',
          schedule: 'Daily',
          img: 'https://twitchaddict.com/wp-content/uploads/2021/01/TenZ-Becomes-Cloud9-Streamer.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'loud_coringa',
          userId: 0,
          contentType: 'Gaming - Grand Theft Auto 5, Just Chatting',
          schedule: 'Often 7 days a week',
          img: 'https://yt3.ggpht.com/a/AATXAJzEAVosdMzWqqCimcfBAbspYJJrpP5PwivqwQ=s900-c-k-c0xffffffff-no-rj-mo',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Pokimane',
          userId: 0,
          contentType: 'Gaming - VALORANT, Just Chatting',
          schedule: 'Unlikely to stream on Thursdays',
          img: 'https://www.dexerto.com/wp-content/uploads/2021/02/pokimane-unban-request-twitch-1536x864.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'AdinRoss',
          userId: 0,
          contentType: 'Gaming - GTA5, Just Chatting',
          schedule: 'Unlikely to stream on Thursdays',
          img: 'https://www.dexerto.com/wp-content/uploads/2021/04/27/adin-ross-twitch-streamer-1024x576.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'DisguisedToast',
          userId: 0,
          contentType: 'Gaming - AmongUs, Just Chatting',
          schedule: 'Daily',
          img: 'https://yt3.ggpht.com/-vfFIxiZLWX4/AAAAAAAAAAI/AAAAAAAAAAA/qw-gHZM8rs8/s900-c-k-no/photo.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'goncho',
          userId: 0,
          contentType: 'Gaming - Counter-Strike, Just Chatting',
          schedule: 'Daily',
          img: 'https://i.ytimg.com/vi/1QD70QLp3FQ/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Coreano',
          userId: 0,
          contentType: 'Gaming - VALORANT, Just Chatting',
          schedule: 'Daily',
          img: 'https://noticias.maisesports.com.br/wp-content/uploads/2021/06/comeceiastreamarparamesentirmelhor-800x450.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'IlloJuan',
          userId: 0,
          contentType: 'Gaming - Wordle, Just Chatting',
          schedule: 'Daily',
          img: 'https://i.ytimg.com/vi/cQuNfJXeOEc/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'liminhag0d',
          userId: 0,
          contentType: 'Travel & Outdoors',
          schedule: 'Daily All Day',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/308fa859-303d-44eb-a383-96eb6c18e78a-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'duki',
          userId: 0,
          contentType: 'Special Events',
          schedule: 'Fridays',
          img: 'https://i.ytimg.com/vi/LvAStgWCTjk/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'duki',
          userId: 0,
          contentType: 'Special Events',
          schedule: 'Fridays',
          img: 'https://i.ytimg.com/vi/LvAStgWCTjk/maxresdefault.jpg',
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
