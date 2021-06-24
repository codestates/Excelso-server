"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Review, Brand }) {
      // define association here
      this.hasMany(Review, {
        foreignKey: "coffee_id",
      });

      this.belongsTo(Brand, {
        foreignKey: { name: "brand_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Coffee.init(
    {
      title: DataTypes.STRING,
      src: DataTypes.STRING,
      desc: DataTypes.STRING,
      category: DataTypes.STRING,
      kcal: DataTypes.INTEGER,
      ml: DataTypes.INTEGER,
      sugar: DataTypes.INTEGER,
      caffeine: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Coffee",
      tableName: "Coffee",
    }
  );
  return Coffee;
};
