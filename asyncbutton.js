"use strict";
(function () {
    console.log('startup...');
    function buttonHandler(next, e) {
        console.log(e);
        setTimeout(next.bind(undefined, e), 2000)
    }
    
    function printIntermediateResults(next, e) {
        console.log("intermediate results with " + e);
        setTimeout(next, 2000);
    }
    
    function printOutResults() {
        console.log("results came back");
    }
    
    let ir = printIntermediateResults.bind(undefined, printOutResults);
    let eh = buttonHandler.bind(undefined, ir);
    
    let button = document.getElementById("mybutton");
    button.addEventListener('click', eh);
    
    
//    console.log('startup...');
//    let button = document.getElementById("mybutton");
//    button.addEventListener('click', function (e) {
//        console.log(e);
//        setTimeout(function () {
//            console.log('results came back');
//        }, 2000);
//    });
}())
