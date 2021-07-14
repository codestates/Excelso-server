const { User } = require("../../models");

// Middleware
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const session = req.session;
  const saltedPassword = password + process.env.SALT;
  const hashedPaswword = crypto
    .createHmac("sha512", process.env.CRYPTO)
    .update(saltedPassword)
    .digest("hex");

  await User.findOne({
    where: { email, password: hashedPaswword }
  })
    .then((data) => {
      if (data && session) {
        let accessToken = jwt.sign(
          { user_id: data.id, info: email },
          process.env.JWT
        );
        session.save(function() {
            session.userId = accessToken
            res.cookie('token', accessToken)
            res.status(200).send({
            accessToken,
            info: {
              id: data.dataValues.id,
              email: data.dataValues.email,
              nickname: data.dataValues.nickname,
            },
            message: "success",
          });
        })

      } else {
        res.status(404).send("invalid user");
      }
    })
    .catch(err => {
      res.status(409).send(err);
    });
};
