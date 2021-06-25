const { User } = require("../../models");

module.exports = async (req, res) => {
  const { nickname } = req.body;

  User.findOne({
    where: { nickname },
  }).then((data) => {
    data
      ? res.status(409).send("존재하는 닉네임입니다.")
      : res.status(200).send("사용가능한 닉네임입니다.");
  });
};
