'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Review', [{
      content: "wow",
      rating: 5,
      user_id: 1,
      coffee_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
     }]);
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Review', null, {});
     
  }
};
