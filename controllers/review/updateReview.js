const { Review } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  console.log("리뷰등록 또는 수정");
  const { coffee_id, content, token, rating } = req.body;

  const decodeToken = jwt.verify(token, process.env.JWT);
  const user_id = decodeToken.user_id;

  await Review.findOrCreate({
    where: { user_id, coffee_id },
    defaults: { content, rating },
  })
    .then(async ([result, created]) => {
      if (created) {
        res.status(200).send("등록 완료");
      } else {
        await Review.update(
          {
            rating,
            content,
          },
          {
            where: {
              user_id,
              coffee_id,
            },
          }
        ).then(() => res.status(200).send("수정 완료"));
      }
    })
    .catch((err) => res.status(409).send(err));
};
