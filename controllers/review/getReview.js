// 겟 리뷰
const { Review, User } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
    try {
      let { coffee_id } = req.params;
      // const coffeeId = Number(coffee_id);
      // console.log("coffee_id", typeof coffee_id);
      // console.log("coffeeId", typeof coffeeId);
  
      const reviews = await Review.findAll({
        where: {
          coffee_id,
        },
        raw: true,
        include: [
          {
            model: User,
            as: "User",
            attributes: ["nickname", "id"],
          },
        ],
      });
      console.log("1차과정 통과");
      const a = reviews.map((review) => {
        return Object.assign(
          {},
          {
            id: review.id,
            content: review.content,
            rating: review.rating,
            createdAt: review.createdAt,
            updatedAt: review.updatedAt,
            coffee_id: review.coffee_id,
            user_id: review["User.id"],
            nickname: review["User.nickname"],
          }
        );
      });
      console.log("2차과정 통과");
      console.log("review", reviews);
      if (reviews.length > 0) {
        res.status(200).send(a);
      } else {
        res.status(404).send("No review");
      }
    } catch (err) {
      res.status(500).send(err);
    }
 };