const { User } = require("../../models");

// Middleware
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const saltedPassword = password + process.env.SALT;
  const hashedPaswword = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword)
    .digest("hex");

  await User.findOne({
    where: { email, password: hashedPaswword },
  })
    .then((data) => {
      if (data && req.session) {
        let accessToken = jwt.sign(
          { user_id: data.id, info: email },
          process.env.JWT
        );

        req.session.user_id = accessToken;
        console.log(req.session.user_id, "show me");
        console.log("데이터들어왔다");
        res.status(200).send({
          accessToken,
          info: {
            id: data.dataValues.id,
            email: data.dataValues.email,
            nickname: data.dataValues.nickname,
          },
          message: "success",
        });
      } else {
        res.status(404).send("invalid user");
      }
    })
    .catch((err) => {
      res.status(409).send(err);
    });
};
