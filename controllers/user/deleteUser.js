const { User } = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { token } = req.body;
  const decodeToken = jwt.verify(token, process.env.JWT);
  const user_id = decodeToken.user_id;
  // console.log("decode", decodeToken);
  // console.log("userid!", user_id);
  try {
    if (user_id) {
      req.session.destroy();
      User.destroy({
        where: { id: user_id },
      }).then(() => {
        res.status(200).json({
        data: null,
        message: "회원탈퇴가 완료되었습니다.",
      });
    });
  } else {
      res.status(404).json({
        data: null,
        message: "회원탈퇴에 실패하셨습니다.",
      });
    }
  } catch (err) {
    res.status(500).json({
      data: null,
      message: "server err",
    });
  }
  //토큰 파괴
  //회원정보 파괴
  //try,catch 서버에러 만들기
};
