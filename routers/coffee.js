const express = require("express");
const router = express.Router();
const { coffee } = require("../controllers");

router.get("/brand", coffee.brand);
router.get("/banner", coffee.banner);
router.get("/coffeeInfo", coffee.coffeeInfo);

module.exports = router;
