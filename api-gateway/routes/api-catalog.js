/*============================================
Title: api-catalog.js;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: api catalog;
===========================================*/

//API Routes
var express = require('express');
var checkToken = require('../check-token');
var router = express.Router();
var auth_controller = require('../controllers/authController');

//POST request for registering a user
router.post('/auth/register',auth_controller.user_register);
router.post('/auth/login',auth_controller.user_login);

// GET request for verifying user tokens
// router.get('/auth/token', auth_controller.user_token);
router.get('/auth/token', checkToken, auth_controller.user_token);
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;