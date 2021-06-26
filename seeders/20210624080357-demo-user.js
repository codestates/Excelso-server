'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [{
      email: 'kimcoding',
      password: '1234',
      nickname: 'tible',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      email: 'gurwo',
      password: '1234',
      nickname: 'codingwang',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]); 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  }
};
