'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Brand', [{
      title: 'dalkomm',
      logo: 'https://image.dalkomm.com/data/KOMM/uploads/renew/2020/03/2020_달콤_투명로고-1.png',
      desc: '최고 품질로 선별된 최상급의 아라비카종을 사용하여 부드러운 맛과 향의 밸런스를 최적화시킨 프리미엄 블렌딩을 추구하며 명품 머신 라 심발리를 통해 추출되는 달.콤의 에스프레소는 커피를 처음 접하는 고객부터 커피 애호가 모두 만족할 수 있는 맛과 향을 자랑합니다.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      title: 'coffeeBay',
      logo: 'https://t1.daumcdn.net/cfile/tistory/9989D4425B1E3C9501',
      desc: '커피베이는 5가지 아라비카 원두를 최적의 배합 비율로 블랜딩하여 가장 맛있는 커피 맛을 구현하였습니다 또한 신선한 원두만을 사용하기 때문에 그 향과 맛을 그대로 살릴 수 있는 태우지 않는 미디엄 로스팅 방식을 고수합니다.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]); 
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Brand', null, {});

  }
};
