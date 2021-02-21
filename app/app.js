"use strict"

// 모듈
const express    = require("express");     // 노드js에서 제공하는 웹프래임워크 
const app        = express( );             // 
const bodyParser = require("body-parser"); // HTML
const dotenv = require("dotenv");
dotenv.config();
 

const port = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`)); // 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // 

module.exports = app;
