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

//user.save is used to add a new user in our database
module.exports.add = (user,callback) => {
    user.save(callback);
};
module.exports.getById = (id,callback) => {
    var query = {_id: id};
    User.findById(query,callback);
};
