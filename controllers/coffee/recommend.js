const { Review, Coffee } = require("../../models");
const Sequelize = require("sequelize");

module.exports = {
  orderByRating: async (req, res) => {
    try {
      const ratingRecommendList = await Review.findAll({
        where: {
          rating: {
            [Sequelize.Op.gte]: 4,
          },
        },
        limit: 10,
        raw: true,
        include: [
          {
            model: Coffee,
            as: "Coffee",
            attributes: ["title", "src", "category"],
          },
        ],
      });
      // console.log("ratingRecommendList", ratingRecommendList);

      const sendRatingRecommend = ratingRecommendList.map((data) => {
        return Object.assign(
          {},
          {
            id: data.id,
            rating: data.rating,
            title: data["Coffee.title"],
            src: data["Coffee.src"],
            category: data["Coffee.category"],
          }
        );
      });

      if (ratingRecommendList.length > 0) {
        res.status(200).send({
          message: "sort by rating",
          data: sendRatingRecommend,
        });
      } else {
        res.status(404).send("Can't find recommend order by rating");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
};
