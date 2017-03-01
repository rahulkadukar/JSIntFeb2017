"use strict";

(function(){
    let a = {
        name: "Fred",
        address: "Over here",
        getAddressLabel: function() {
            return this.name + "\n" + this.address;
        }
    };
    
    let b = {
        name: "Albert",
        address: "Over there",
        count: 99
    }
    
    function printLabel() {
        console.log(this.name + " at " + this.address);
    }
    
    console.log(a.getAddressLabel());
    b.getAddressLabel = a.getAddressLabel;
    console.log(b.getAddressLabel());
    
    a.pl = printLabel;
    a.pl();
    
    console.log("--------------------------------");
    let printBLabel = printLabel.bind(b);
    printBLabel();
    console.log("--------------------------------");

    let template = {
        v: "middle",
        comp: function(x) {
            return x.length > this.v.length;
        }
    }

    let words = ["a", "an", "and", "aardvark", "functional"];
    
    let longerthantemplate = function(x) {
        return x.length > template.v.length;
    };

    //words.filter(template.comp.bind(template)).forEach(s=>console.log(s));
    
    words.filter(longerthantemplate).forEach(s=>console.log(s));
    
    console.log("----------------------");
    let t2 = {
        v: "I"
    };
    words.filter(template.comp.bind(t2)).forEach(s=>console.log(s));
    console.log("----------------------");

    function add(x,y) {
        return x+y;
    }
    
    console.log(add(3,4));
    console.log("----------------------");

    let nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
//    nums.map(x=>x + 2).forEach(s=>console.log(s));
    nums.map(add.bind(undefined, 2)).forEach(s=>console.log(s));

}());

