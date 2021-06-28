module.exports = async function googleSuccess(req, res) {
  const displayName = await googleLogin(req.query.code);
  console.log(displayName);

  res.redirect("http://localhost:3000");
};
