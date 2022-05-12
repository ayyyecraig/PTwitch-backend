'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('playlists', 'name',{
      type:Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('playlists', 'name');
  }
};
