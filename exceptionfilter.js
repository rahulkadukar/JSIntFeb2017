"use strict";
(function () {
    function filterMaker(threshold) {
        return function (x) {
            if (!x.length) throw new Error("filter works only for items with length field");
            if (x.length < 1) return false;
            return true;
        };
    }

    let data = ["a", "bbb", "fff", 99, "henry", 16];

    function filterFixer(f, def) {
        return function (x) {
            try {
                return f(x);
            } catch (e) {
                return def;
            }
        };
    }

//    data.filter(filterMaker(3)).forEach(x => console.log(x));
//    console.log("------------------------------");
    data.filter(filterFixer(filterMaker(3), false)).forEach(x => console.log(x));
    console.log("------------------------------");
    data.filter(filterFixer(filterMaker(3), true)).forEach(x => console.log(x));


}())

