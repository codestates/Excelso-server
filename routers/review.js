const express = require("express");
const router = express.Router();
const { review } = require('../controller');



router.post('/updateReview', review.updateReview);
router.get('/getReview/:coffee_id', review.getReview);


//  review 등록 & 수정 ( 클라이언트: 로그인여부에 따라 작성창(모달?) 또는 로그인(모달) 렌더)
// router.post("/update", (req, res) => {
//   const { coffee_id, content, token, rating } = req.body;

//   const decodeToken = jwt.verify(token, process.env.JWT);
//   const user_id = decodeToken.user_id;

//   Review.findOrCreate({
//     where: { user_id, coffee_id },
//     defaults: { content, rating },
//   })
//     .then(([result, created]) => {
//       if (created) {
//         res.status(200).send("등록 완료");
//       } else {
//         Review.update(
//           {
//             rating,
//             content,
//           },
//           {
//             where: {
//               user_id,
//               coffee_id,
//             },
//           }
//         ).then(() => res.status(200).send("수정 완료"));
//       }
//     })
//     .catch((err) => res.status(409).send(err));
// });

// // 겟 리뷰

// router.get("/:coffee_id", async (req, res) => {
//   try {
//     let { coffee_id } = req.params;
//     // const coffeeId = Number(coffee_id);
//     // console.log("coffee_id", typeof coffee_id);
//     // console.log("coffeeId", typeof coffeeId);

//     const reviews = await Review.findAll({
//       where: {
//         coffee_id,
//       },
//       raw: true,
//       include: [
//         {
//           model: User,
//           as: "User",
//           attributes: ["nickname", "id"],
//         },
//       ],
//     });
//     console.log("1차과정 통과");
//     const a = reviews.map((review) => {
//       return Object.assign(
//         {},
//         {
//           id: review.id,
//           content: review.content,
//           rating: review.rating,
//           createdAt: review.createdAt,
//           updatedAt: review.updatedAt,
//           coffee_id: review.coffee_id,
//           user_id: review["User.id"],
//           nickname: review["User.nickname"],
//         }
//       );
//     });
//     console.log("2차과정 통과");
//     console.log("review", reviews);
//     if (reviews.length > 0) {
//       res.status(200).send(a);
//     } else {
//       res.status(404).send("No review");
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;
