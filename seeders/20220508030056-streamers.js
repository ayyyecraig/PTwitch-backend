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
          img: 'http://www.capsulecomputers.com.au/wp-content/gallery/Path-Of-Exile/path-of-exile-logo-02.jpg',
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
          img: 'https://yt3.ggpht.com/a/AATXAJyVFYp_z4FqQzPYDJkZJjwRyUgbyWG4JiAGXA=s100-c-k-c0xffffffff-no-rj-mo',
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
          name: 'buster',
          userId: 0,
          contentType: 'Virtual Casino, Just Chatting',
          schedule: 'Daily',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/96d66837-22f0-4393-89c5-2e5c2408485b-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'AustinShow',
          userId: 0,
          contentType: 'Just Chatting',
          schedule: 'Daily',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9e894c05-6131-4414-bf01-a65e9f88b13a-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: '악어 (jdm2088)',
          userId: 0,
          contentType: 'Gaming- Minecraft, LOL',
          schedule: 'Unlikely to stream in Saturdays',
          img: 'https://streamers.zone/wp-content/uploads/2020/05/jdm2088-profile_image-c46fd83bd8115db2-300x300-1.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'bratishkinoff',
          userId: 0,
          contentType: 'Just Chatting',
          schedule: 'Daily',
          img: 'https://twitchgid.ru/wp-content/uploads/2020/04/Bratishkin-twich-1.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Emiru',
          userId: 0,
          contentType: 'Just Chatting, Gaming-LOL',
          schedule: 'Unlikely to stream on Sunday',
          img: 'https://gamespredator.com/wp-content/uploads/2020/08/EghRmnnUwAAqVaE.jpeg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Lirik',
          userId: 0,
          contentType: 'Just Chatting, Gaming-Loot River',
          schedule: 'Unlikely to stream on Thursday',
          img: 'https://cdn-images.win.gg/resize/w/1115/h/630/format/jpg/type/progressive/fit/cover/path/news/722caafb4825ef5d8670710fa29087cf/e3b53018007035a277a333632cd9fabf/original.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'LLA',
          userId: 0,
          contentType: ' Gaming-LOL',
          schedule: 'Unlikely to stream on Thursday, and Tuesdays',
          img: 'https://www.aventurasnerd.com/wp-content/uploads/2021/06/LLA-Clausura.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Chica',
          userId: 0,
          contentType: ' Gaming- Fortnite, Phasmophobia',
          schedule: 'Daily',
          img: 'https://nexter.org/wp-content/uploads/sites/3/2019/03/coolest-Female-Fortnite-Players-pics9.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: '우왁굳 (woowakgood) ',
          userId: 0,
          contentType: ' Gaming- VALORANT/ Just Chatting',
          schedule: 'Daily',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Toniki ',
          userId: 0,
          contentType: ' Gaming- Overwatch',
          schedule: 'Daily',
          img: 'https://yt3.ggpht.com/a/AATXAJzuouXFYm9F7_IR1zIWef5iMPUioUsTO1NRaQ=s900-c-k-c0xffffffff-no-rj-mo',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Jerma985 ',
          userId: 0,
          contentType: ' Gaming- Dinosaur Fossil Hunter, Just Chatting',
          schedule: 'Daily',
          img: 'https://yhstars.com/wp-content/uploads/2020/11/Jerma985-e1606566643924.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'buddha ',
          userId: 0,
          contentType: ' Gaming',
          schedule: 'Often Daily',
          img: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7f1cd66d-f145-4a0f-8e0e-5196c9c87410-profile_image-300x300.png',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'deepins02 ',
          userId: 0,
          contentType: ' Gaming/ Just Chatting',
          schedule: 'Unlikely to stream on Thursdays',
          img: 'https://i.ytimg.com/vi/SKzJao0ujv8/maxresdefault.jpg',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
         {
          name: 'Jasper7se',
          userId: 0,
          contentType: ' Gaming- Rust',
          schedule: 'Unlikely to stream on Thursdays',
          img: 'https://yt3.ggpht.com/a-/AAuE7mBfaQVvVfbZXkGXhDQAyYG8l_AHzqu_x88oOg=s900-mo-c-c0xffffffff-rj-k-no',
          status: true,
          createdAt: new Date(),
          updatedAt: new Date()  
         },
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
      ]
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('streamers', null, {})
  }
};
