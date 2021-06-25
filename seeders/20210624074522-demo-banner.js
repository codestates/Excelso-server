'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Banner', [{
    src: 'https://image.dalkomm.com/data/KOMM/uploads/renew/bfi_thumb/2021_05_pc_earlysummer_main-3de2shwrj4q64bbsuo5csq.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },{
    src: 'https://coffeebay.com/upload/file_20210608125447.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]); 
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Banner', null, {});
  }
};
