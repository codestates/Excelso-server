const express = require('express');
const router = express.router();
const { user, coffee, review, brand, banner } = require('./controllers');

router.post('/login', user.login);
router.post('/logout', user.logout);
router.post('/signup', user.signup);