const { User } = require("../../models");

// Middleware
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

module.exports = async (req, res) => {
  const { currentPassword, changePassword, token } = req.body;

  const decodeToken = jwt.verify(token, process.env.JWT);
  // email과 id가 들어있다.
  console.log("decodeToken", decodeToken);

  const saltedPassword = changePassword + process.env.SALT;
  const hashedPaswword = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword)
    .digest("hex");

  User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    data.dataValues.password !== hashedPaswword
      ? User.update(
          { password: hashedPaswword },
          { where: { email: decodeToken.info } }
        )
          .then(() => {
            res.status(200).send("비밀번호를 성공적으로 변경하였습니다.");
          })
          .catch((err) => {
            res.status(400).send("what error");
          })
      : res.status(409).send("비밀번호변경에 실패하였습니다");
  });
};
