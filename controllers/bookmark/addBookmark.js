const { User, Coffee, Bookmark } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// findOrCreate
module.exports = async (req, res) => {
  console.log("req!!!!!!!!!!!", req.body);
  const { token, coffee_id, rating } = req.body;
  const decodeToken = jwt.verify(token, process.env.JWT);
  const user_id = decodeToken.user_id;
  //토큰을 어떻게 할지 자리
  try {
    await Bookmark.findOrCreate({
      where: { user_id, coffee_id },
      default: { rating },
    }).then(async ([info, created]) => {
      if (created) {
        //존재하지 않으면
        return res.status(200).send({
          message: "즐겨찾기에 추가되었습니다.",
        });
      } else {
        await Bookmark.destroy({
          where: { user_id, coffee_id },
        }).then(() => {
          return res.status(200).send({
            message: "즐겨찾기가 해제되었습니다.",
          });
        });
      }      
    })
  } catch (err) {
    console.log(err, rating);
    res.status(500).send({
      message: "server error",
    });
  }
};

//   const bookmarkInfo = await Bookmark.findOne({
//     where: { user_id, coffee_id }
//   })
//   try {
//   if(!bookmarkInfo) {
//     // 중복이 없다면
//     await Bookmark.create({
//       user_id,
//       coffee_id,
//     })
//     .then(() => {
//       return res.status(200).json({
//         message: '즐겨찾기에 추가되었습니다.',
//       })
//     })
//   }else {
//     return res.status(404).json({
//       message: '이미 추가되었습니다.',
//     })
//   }
//  }catch(err) {
//     return res.status(500).json({
//       message: 'server error',
//     })
//  }
// }

// 클라이언트 화면에서 user_id와 coffee_id를 이용

// if(bookmarkInfo) {
//     Bookmark.destroy({
//         where: { user_id, coffee_id },
//     }).then(() => {
//       return res.status(200).json({
//         message: "즐겨찾기가 해제되었습니다.",
//       })
//     })
//   }else {
//     return res.status(400).json({
//       message: "정보를 다시 확인해주세요.",
//     })
//   }
