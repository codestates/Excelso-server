"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Coffee }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      });

      this.belongsTo(Coffee, {
        foreignKey: { name: "coffee_id", allowNull: false },
        onDelete: "CASCADE",
      });
    }
  }
  Review.init(
    {
      content: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "Review",
    }
  );
  return Review;
};
