const express = require("express");
const router = express.Router();
const { bookmark } = require("../controllers");

router.post("/addBookmark", bookmark.addBookmark);
router.get("/:user_id", bookmark.getBookmark);


module.exports = router;