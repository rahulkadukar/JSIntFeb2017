"use strict";

(function () {
    let duckProto = {
        weight: 0,
        wingspan: 0,
        getWiderThanMeCriterion: function() {
          return d => d.wingspan > this.wingspan;  
        },
        getHeavierThanMeCriterion: function () {
            console.log("creating weight criterion for " + this);
            // lambda version
            return d => d.weight > this.weight;

            // function expression version
//            let self = this;
//            return function(d) {
//                console.log("comparing duck " + d + " with " + self);
//                return d.weight > self.weight;
//            };
        },
        toString: function () {
            return "Duck: weight = " + this.weight + " wingspan " + this.wingspan;
        }
    };

    function makeDuck(weight, wingspan) {
        let self = Object.create(duckProto);
        if (weight !== undefined)
            self.weight = weight;
        if (wingspan !== undefined)
            self.wingspan = wingspan;
        return self;
    }

    let aDuck = makeDuck(3, 14);
    let flock = [aDuck];
    flock.push(makeDuck(2, 12));
    flock.push(makeDuck(1, 10));
    flock.push(makeDuck(5, 18));
    flock.push(makeDuck(3, 16));
    flock.push(makeDuck(5, 11));

    let printer = function (x) {
        console.log(" - " + x);
    }
    flock.forEach(printer);
    
    console.log("----------------------------------")
    let filt = aDuck.getHeavierThanMeCriterion();
    flock.filter(filt).forEach(printer);

    function inverse(f) {
        return function(x) {
            return !f(x);
        };
    }

    console.log("----------------------------------")
    flock.filter(inverse(filt)).forEach(printer);


}());
