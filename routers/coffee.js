const express = require('express');
const router = express.Router();
const { user, coffee } = require('../controllers');

router.get('/brand', coffee.brand);
router.get('/banner', coffee.banner);
router.get('/coffeeInfo', coffee.coffeeInfo);
router.get('/review', coffee.review);
router.post('/review', coffee.review);


module.exports = router;