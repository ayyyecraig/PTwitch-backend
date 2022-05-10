'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
         name: 'Weeb',
         username: 'weebMcgeeb',
         email: 'thelongshot@yahoo.com',
         passwordDigest: 'epassword1',
         createdAt: new Date(),
         updatedAt: new Date() 
        },
        {
          name: 'becky',
          username: 'mr3000',
          email: 'AOLishot@AOL.com',
          passwordDigest: '123pass',
          createdAt: new Date(),
          updatedAt: new Date() 
        }
      ]
    )
    
   
  },

  down: async  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};

