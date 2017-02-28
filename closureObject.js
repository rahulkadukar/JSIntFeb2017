"use strict";

function makeStudent(name, major) {
    let myname = name === undefined ? "Unset" : name;
    let mymajor = major === undefined ? "Unset" : major;
    let theStudent = {
        getName: function() {
            return myname;
        },
        getMajor: function() {
            return mymajor;
        },
        setMajor: function(n) {
            if (n !== undefined) {
                mymajor = n;
            }
        },
        toString: function() {
            return "Student, name is " + myname + " major is " + mymajor;
        }
    };
    return theStudent;
}

let s1 = makeStudent("Fred", "Engineering");
console.log("Student has name " + s1);
s1.setMajor("Political Science");
console.log("Student has name " + s1);
//s1.setName("Albert");;
for (let k in s1) {
    console.log(k + " : "+ s1[k]);
}