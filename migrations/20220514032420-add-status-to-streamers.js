'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('streamers', 'status', {
      type: Sequelize.BOOLEAN
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('streamers', 'status')
  }
};
