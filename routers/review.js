const express = require("express");
const router = express.Router();
const { review } = require("../controllers");

// review 등록 & 수정 ( 클라이언트: 로그인여부에 따라 작성창(모달?) 또는 로그인(모달) 렌더)
router.post("/update", review.updateReview);
// 겟 리뷰
router.get("/:coffee_id", review.getReview);
// delete review
router.post("/delete", review.deleteReview);
module.exports = router;
