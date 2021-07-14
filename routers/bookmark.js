const express = require("express");
const router = express.Router();
const { bookmark } = require("../controllers");


router.post("/addbookmark", bookmark.addBookmark);
router.get("/getbookmark", bookmark.getBookmark);


module.exports = router;
