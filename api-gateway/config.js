/*============================================
Title: Assignment 2.3;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: configuration;
===========================================*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
config.web.secret = 'topsecret';