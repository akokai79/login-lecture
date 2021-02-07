"use strict"

// 모듈
const express = require("express");
const app = express( );

const port = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");

app.use(express.static(`${__dirname}/src/public`)); // 
app.use("/", home); // 


module.exports = app;

/*

app.get("/", (req,res) => {
    res.render("home/index");
});

app.get("/login", (req,res) => {
    res.render("home/login");
});

app.get("/login", (req, res)=> {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text" placeholder="아이디"><br>
        <input type="text" placeholder="비밀번호"><br>    
        <button>로그인</button>
    </body>
    </html>
    `);
});

app.get("/", (req, res)=> {
	res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트입니다.
    </body>
    </html>
    `);
});
const http = require("http");
const app = http.createServer((req,res)=> {
    res.writeHead(200, { "Context-Type": "text/html; charset=utf-8" });
    console.log(req.url);
    if (req.url === "/" ) {
        res.end("여기는 루트 입니다.");
    } else if (req.url === "/login" ) {
        res.end("여기는 로그인화면 입니다.");
    }
} );

app.listen(3001, function () {
	console.log("http로 가동된 서버입니다.");
});
*/