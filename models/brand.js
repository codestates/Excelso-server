"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Coffee }) {
      // define association here
      this.hasMany(Coffee, {
        foreignKey: "brand_id",
      });
    }
  }
  Brand.init(
    {
      title: DataTypes.STRING,
      logo: DataTypes.STRING,
      desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brand",
      tableName: "Brand",
    }
  );
  return Brand;
};
