const { User } = require("../../models");
const crypto = require("crypto");
require("dotenv").config();

module.exports = async (req, res) => {
  const { email, password, nickname } = req.body;

  const saltedPassword = password + process.env.SALT;
  const hashedPaswword = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword)
    .digest("hex");

  console.log("해쉬비밀번호확인", hashedPaswword);

  await User.findOne({
    where: { email },
  }).then((data) => {
    if (data) {
      return res.status(409).send("이미 존재하는 계정입니다.");
    }

    User.create({
      email,
      nickname,
      password,
    })
      .then(() => {
        User.update({ password: hashedPaswword }, { where: { email } });
        res.status(200).send("회원가입이 성공적으로 완료되었습니다.");
      })
      .catch(() => {
        res.status(500).send("server error");
      });
  });
};
