/*============================================
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: user model;
===========================================*/

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model('User', userSchema);