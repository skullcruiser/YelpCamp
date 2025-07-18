const express = require('express');
const router = express.Router();
const User = require('../models/user');
const AppError = require('../util/AppError');
const catchAsync = require('../util/catchAsync');
const passport = require('passport');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/user')

router.route('/register')
    .get(users.renderRegistrationForm)
    .post(catchAsync(users.registerUser))

router.route('/login')
    .get(users.renderLoginForm)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), catchAsync(users.loginUser))

router.route('/logout')
    .get(users.logoutUser)
    .post(users.logoutUser)

module.exports = router;