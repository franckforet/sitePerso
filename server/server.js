var url = require('url');
var express = require('express');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

var userRepo = require("./func/repository/UserRepository").UserRepository;
var signinC = require("./func/controller/Signin").signin;
var dataMenu = require("./func/controller/dataMenu");
var game = require("./func/controller/Game");
var stats = require("./func/controller/Stats");
var profil = require("./func/controller/Profil");


var querystring = require('querystring');
var bodyParser = require("body-parser");

var app = express();
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));