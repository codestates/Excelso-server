'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews', [{
      user_id: 1,
      coffee_id: 1,
      content: '',
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      user_id: 2,
      coffee_id: 2,
      content: '',
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
