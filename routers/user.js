const express = require("express");
const router = express.Router();

const { user } = require("../controllers");

// user
router.post("/login", user.login);
router.post("/logout", user.logout);
router.post("/signup", user.signup);
router.post("/checknickname", user.checkNickname);
router.post("/checkemail", user.checkEmail);
router.patch("/changenickname", user.changenickname);
router.patch("/changepassword", user.changepassword);
router.post("/deleteuser", user.deleteUser);


// 로그인 할 주소
// app.get("/google/login", function(req, res) {
//   res.redirect(url);
// });
router.get("/google/login", user.googleLogin);

// 로그인이 되었을 경우 실행될 callback 주소
// app.get("/auth/google/callback", async function(req, res) {
//   const displayName = await googleLogin(req.query.code);
//   console.log(displayName);

//   res.redirect("http://localhost:3000");
// });
router.get("/auth/google/callback", user.googleSuccess);

// 주의!
// app.get("/", function(req, res) {
//   res.send("Hello World!");
//   console.log("로그인 해서 홈으로 돌아옴");
// });

module.exports = router;
