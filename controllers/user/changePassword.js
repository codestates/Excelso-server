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

  const saltedPassword1 = currentPassword + process.env.SALT;
  const hashedPaswword1 = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword1)
    .digest("hex");

  const saltedPassword2 = changePassword + process.env.SALT;
  const hashedPaswword2 = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword2)
    .digest("hex");

  await User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    data.dataValues.password !== hashedPaswword1 &&
      res.status(409).send("현재비밀번호가 일치하지않습니다.");
  });

  await User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    data.dataValues.password !== hashedPaswword2
      ? User.update(
          { password: hashedPaswword2 },
          { where: { email: decodeToken.info } }
        )
          .then(() => {
            res.status(200).send("비밀번호를 성공적으로 변경하였습니다.");
          })
          .catch((err) => {
            res.status(400).send("what error");
          })
      : res.status(409).send("새로운 비밀번호를 입력해주세요");
  });
};
