"use strict";
let Student = function (name, major, ...courses) {
//    "use strict";
    if (this === undefined) throw new Error("This is a constructor, use it with new!");
    if (name !== undefined)
        this.name = name;
    if (major !== undefined)
        this.major = major;
    if (courses.length > 0) {
        this.courses = courses;
    }
};

Student.prototype = {
    name: "unspecified",
    major: "none",
    courses: [],
    toString: function () {
        let rv = this.name + " majoring in " + this.major;
        if (this.courses.length > 0) {
            for (let c of this.courses) {
                rv += "\n - " + c;
            }
        }
        return rv;
    }
};  

// DO NOT CALL CONSTRUCTORS WITHOUT NEW!!!
//Student("Fred", "Mathematics");
//console.log("value of major is " + major);

let school = [];
school.push(new Student("Fred", "Engineering", "Math", "Physics"));
school.push(new Student("Jim"));
school.push(new Student("Sheila", "Applied Mathematics", "Math", "Statistics", "Electronics"));
school.push(new Student("Lisa"));

school.forEach(s => console.log("> " + s));
//school.filter(s => s.courses.length > 2).forEach(s => console.log("-- " + s));

school[0].__proto__.major = "lazy isn't taking anything!";
school.forEach(s => console.log("> " + s));
