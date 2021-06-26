const express = require("express");
const router = express.Router();
const { user } = require("../controllers");

// user
router.post("/login", user.login);
router.post("/logout", user.logout);
router.post("/signup", user.signup);
router.post("/checknicnkname", user.checkNickname);
router.post("/checkemail", user.checkEmail);
router.post("/changenickname", user.changenickname);
router.post("/changepassword", user.changepassword);
module.exports = router;
