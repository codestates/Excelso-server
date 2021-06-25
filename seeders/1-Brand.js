"use strict";
const { brand_data } = require("../seedData/brand");
const { banner } = require("../seedData/banner");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("Brand", brand_data);
    return queryInterface.bulkInsert("Banner", banner);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete("Brand", null, {});
    queryInterface.bulkDelete("Banner", null, {});
  },
};
