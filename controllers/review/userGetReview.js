const { Coffee } = require("../../models");
const { Review } = require("../../models");
const { User } = require("../../models");
require("dotenv").config();

module.exports = async (req, res) => {
  try {
    let { user_id } = req.params;

    const reviews = await Review.findAll({
      where: {
        user_id,
      },
      raw: true,
      include: [
        {
          model: Coffee,
          as: "Coffee",
          attributes: ["src"],
        }
      ],
    });

    const userReview = reviews.map((review) => {
      return Object.assign(
        {},
        {
          id: review.id,
          content: review.content,
          rating: review.rating,
          createdAt: review.createdAt,
          updatedAt: review.updatedAt,
          coffee_id: review.coffee_id,
          src: review["Coffee.src"],
        }
      )
    })

    console.log(userReview);

    if(reviews.length > 0) {
      res.status(200).send(userReview);
    }else {
      res.status(404).send("not exist");
    }
  }catch (err) {
    res.status(500).send(err);
  }
}
