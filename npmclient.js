"use strict";
(function () {
    let libOne = require("libone");
    console.log("loaded libOne into client");
    libOne.sayHello();
    let libtwo = require("libtwo");
    console.log("loaded libtwo into client");
    libtwo.sayHello();
}());


