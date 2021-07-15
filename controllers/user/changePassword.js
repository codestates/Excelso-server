const { User } = require("../../models");

// Middleware
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

module.exports = async (req, res) => {
  const { currentPassword, changePassword, token } = req.body;

  const decodeToken = jwt.verify(token, process.env.JWT);
  // email과 id가 들어있다.
  // console.log("decodeToken", decodeToken);

  const saltedPassword1 = currentPassword + process.env.SALT;
  const hashedPassword1 = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword1)
    .digest("hex");
  const saltedPassword2 = changePassword + process.env.SALT;
  const hashedPassword2 = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword2)
    .digest("hex");

  await User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    console.log("databasepW" ,data.dataValues.password);
    console.log("NEWpW", hashedPassword1);
    if(data.dataValues.password !== hashedPassword1) {
      return res.status(404).send("현재비밀번호가 일치하지않습니다.");
    }
  });

  await User.findOne({
    where: { email: decodeToken.info },
  }).then((data) => {
    data.dataValues.password !== hashedPassword2
      ? User.update(
          { password: hashedPassword2 },
          { where: { email: decodeToken.info } }
        )
          .then(() => {
            return res.status(200).send("비밀번호를 성공적으로 변경하였습니다.");
          })
          .catch((err) => {
            return res.status(400).send("what error");
          })
      : res.status(409).send("새로운 비밀번호를 입력해주세요");
  });
};
