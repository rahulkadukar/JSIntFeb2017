"use strict";
(function () {
    console.log('startup...');

    function buttonPromise(btn) {
        return new Promise(function(resolve, reject){
            btn.addEventListener('click', function(e) {
                resolve("click");
            });
        });
    }
    
    function pausePromise(data) {
        return new Promise(function(resolve, reject){
            console.log('pause starting, with ' + data);
            setTimeout(function(){
                if (Math.random() < 0.8) {
                    console.log('intermediate completing...');
                    resolve("Intermediate processor handled " + data);
                } else {
                    reject(new Error("processing broke!"));
                }
            }, 2000);
        });
    }
    
    let getChatty = s=>"chatty compute job gave " + s;
    
    let button = document.getElementById("mybutton");
    buttonPromise(button)
            .then(getChatty)
            .then(pausePromise)
            .then(getChatty)
            .then(s=>console.log(s));
    console.log("xxxxxx");
}());
