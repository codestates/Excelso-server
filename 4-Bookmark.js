'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Bookmark', [{
        user_id: 1,
        coffee_id: 1,
        review_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
   
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Bookmark', null, {});
    
  }
};
