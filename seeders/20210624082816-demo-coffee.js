'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('coffees', [{
      title: '드래곤후르츠 자몽에이드',
      src: 'https://image.dalkomm.com/data/KOMM/uploads/renew/bfi_thumb/app_thumb_earlysummer_Dragon-3dhjcm2d3qd5ylmwpqcave.jpg',
      category: 'tea',
      intro: '',
      ml: 470,
      kcal: 115,
      sugar: 21,
      caffeine: 0,
      sns: '',
      brand_id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: '패션후르츠 레몬에이드',
      src: 'https://image.dalkomm.com/data/KOMM/uploads/renew/bfi_thumb/app_thumb_earlysummer_Passion-3dhjcvhm7ocae8malp7h8q.jpg',
      category: 'tea',
      intro: '',
      ml: 470,
      kcal: 141,
      sugar: 34,
      caffeine: 0,
      sns: '',
      brand_id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: '얼그레이 크림라떼',
      src: 'https://image.dalkomm.com/data/KOMM/uploads/renew/bfi_thumb/app_thumb_tavalon_creamlatte-3dhjdo4y2dv81at2f7cz62.jpg',
      category: 'coffee',
      intro: '',
      ml: 355,
      kcal: 275,
      sugar: 23,
      caffeine: 52,
      sns: '',
      brand_id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('coffees', null, {});
  }
};
