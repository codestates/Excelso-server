'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Coffee, User, Review }) {
      // define association here
      this.belongsTo(Coffee, {
        foreignKey: { name: "coffee_id", allowNull: false },
        onDelete: "CASCADE",
      })

      this.belongsTo(User, {
        foreignKey: { name: "user_id", allowNull: false },
        onDelete: "CASCADE",
      })

      this.belongsTo(Review, {
        foreignKey: { name: "review_id", allowNull: false },
        onDelete: "CASCADE",
      })

    }
  };
  Bookmark.init({
    user_id: DataTypes.INTEGER,
    coffee_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};