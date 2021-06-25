'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Review', [{
      user_id: 1,
      coffee_id: 7,
      content: '',
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id: 2,
      coffee_id: 8,
      content: '',
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Review', null, {});
  }
};
