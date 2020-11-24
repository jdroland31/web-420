/*============================================
Title: index.js;
Author: Professor Krasso ;
Date: 26 Oct 2020;
Modified By: Jonathan Roland;
Description: the index file for the api catalog project;
===========================================*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
