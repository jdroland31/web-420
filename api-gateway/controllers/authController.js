/*============================================
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: auth controller;
===========================================*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res) {
    res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res) {
    res.send('NOT IMPLEMENTED: User token lookup GET');
};