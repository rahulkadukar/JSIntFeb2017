"use strict";

let x = {n : "my name"};
Object.defineProperty(x, 'name', {
    configurable: true,
//    writable: true,
    enumerable: true,
    set: function(v) {
        console.log('setting interal value ');
        this.n = v;
    },
    get: function() {
        console.log('getting internal var n');
        return this.n;
    }
});

console.log(x.name);
x.name = "Albert";
console.log(x.name);
