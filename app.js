var express = require('express');
var path = require('path');
var cookieParser =require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('connect-flash');
var passport = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loginapp')
var db = mongoose.connection();
