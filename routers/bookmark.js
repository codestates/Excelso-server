const express = require("express");
const router = express.Router();
const { bookmark } = require("../controllers");

router.post("/addBookmark", bookmark.addBookmark);
router.get("/getBookmark", bookmark.getBookmark);


module.exports = router;