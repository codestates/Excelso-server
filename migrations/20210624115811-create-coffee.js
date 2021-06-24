"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Coffee", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      src: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      brand_id: {
        allowNull: false,
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
        references: {
          model: "Brand",
          key: "id",
        },
      },
      kcal: {
        type: Sequelize.INTEGER,
      },
      ml: {
        type: Sequelize.INTEGER,
      },
      sugar: {
        type: Sequelize.INTEGER,
      },
      caffeine: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Coffee");
  },
};
