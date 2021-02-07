"use strict";

const id = document.querySelector("#id"),
      pw = document.querySelector("#pw"),
      login_btn = document.querySelector("button");

      login_btn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    }
    console.log(req);
}