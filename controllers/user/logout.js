const { User } = require("../../models");

module.exports = async (req, res) => {
  req.session
    ? req.session.destroy(() => {
        res.status(200).send("Delete Session");
      })
    : res.status(400).send("Fali Delete");
};
