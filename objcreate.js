"use strict";

let myprot = {
    name : "unspecified",
    toString : function() {
        return "Some Object, name is " + this.name;
    },
    doStuff : function() {
        console.log("doStuff in myprot");
    }
};

let list = [];
list.push(Object.create(myprot));
list.push(Object.create(myprot));
let numberthree = Object.create(myprot);
numberthree.name = "Albert";
list.push(numberthree);

list.forEach(s => console.log("> " + s));

numberthree.__proto__.name = "Unknown, doesn't count, ignore them!";
list.forEach(s => console.log("> " + s));

console.log("-------------------------------------");

let myOtherProt = Object.create(myprot);
myOtherProt.toString = function() {
    return this.__proto__.toString() + " but really, I'm another kind of object... name is " + this.name;
};

numberthree.__proto__ = myOtherProt;
console.log("numberthree is now " + numberthree);

