const { User } = require("../../models");

// Middleware
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { changeNickname, token } = req.body;

  const decodeToken = jwt.verify(token, process.env.JWT);

  await User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    data.dataValues.nickname !== changeNickname
      ? User.update(
          { nickname: changeNickname },
          { where: { email: decodeToken.info } }
        )
          .then(() => res.status(200).send("닉네임을 변경하였습니다."))
          .catch((err) => res.status(400).send("실패"))
      : res.status(409).send("닉네임 변경에 실패하였습니다.");
  });
};
