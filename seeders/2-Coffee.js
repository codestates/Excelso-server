"use strict";

const { datas } = require("../seedData/coffee");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Coffee", datas.paikdabang);
    queryInterface.bulkInsert("Coffee", datas.paulbanet);
    queryInterface.bulkInsert("Coffee", datas.paulbanetBeverage);
    queryInterface.bulkInsert("Coffee", datas.dalcomCoffee);
    queryInterface.bulkInsert("Coffee", datas.coffeebay);
    queryInterface.bulkInsert("Coffee", datas.coffeeBeans);
    return queryInterface.bulkInsert("Coffee", datas.starbucks);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Coffee", null, {});
  },
};
