"use strict";

let myprot = {
    name : "unspecified",
    toString : function() {
        return "Some Object, name is " + this.name;
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
