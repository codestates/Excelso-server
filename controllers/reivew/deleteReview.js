const { Review } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/** Delete Review
 * 1. 비로그인상태에서 삭제버튼이 존재한다면
 * 2. 다른사람의 리뷰에도 삭제버튼이 존재한다면
 */

module.exports = async (req, res) => {
  try {
    const { token, coffee_id } = req.body;

    // 1번
    !token && res.status(403).send("권한이 없습니다");

    const decodeToken = jwt.verify(token, process.env.JWT);
    const user_id = decodeToken.user_id;

    const deleteReview = Review.destroy({
      where: { user_id, coffee_id }
    }).catch(() => res.status(500).send("Server Error"));

    console.log("deleteReview", deleteReview);

    if (deleteReview) {
      res.status(200).send("리뷰가 삭제되었습니다.");
    } else {
      // 2번
      res.status(401).send("자신의 게시물만 삭제가능");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};
