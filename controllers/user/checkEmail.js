const { User } = require("../../models");

module.exports = async (req, res) => {
  const { email } = req.body;

  User.findOne({
    where: { email },
  }).then((data) => {
    data
      ? res.status(409).send("존재하는 이메일 입니다.")
      : res.status(200).send("사용가능한 이메일입니다.");
  });
};
