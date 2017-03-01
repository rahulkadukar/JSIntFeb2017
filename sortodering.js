"use strict";

(function(){
    let studentProto = {
        fname: "",
        lname: "",
        grade: 0,
        toString: function() {
            return "Student " + this.fname + " " + this.lname + ". GPA is " + this.grade;
        }
    };
    function Student(fname, lname, grade) {
        if (fname !== undefined) this.fname = fname;
        if (lname !== undefined) this.lname = lname;
        if (grade !== undefined) this.grade = grade;
    }
    Student.prototype = studentProto;
    Student.getFNameOrdering = function() {
        return (a,b) => a.fname.localeCompare(b.fname);
    };
    Student.getLNameOrdering = function() {
        return (a,b) => a.lname.localeCompare(b.lname);
    };
    Student.getGradeOrdering = function() {
        return (a,b) => a.grade - b.grade;
    };
    
    let school = [];
    school.push(new Student("Fred", "Smith", 3.6));
    school.push(new Student("Fred", "Jones", 3.2));
    school.push(new Student("Jim", "Jones", 3.7));
    school.push(new Student("Alice", "Williams", 3.9));
    school.push(new Student("Jim", "Smith", 3.4));
    school.push(new Student("Fred", "Smith", 2.2));
    school.push(new Student("Jim", "Smith", 3.0));
    school.push(new Student("Alice", "Williams", 3.2));
    
    let print = x=>console.log(" - " + x);
    school.forEach(print);
    console.log("------------ first --------------");
    school.sort(Student.getFNameOrdering()).forEach(print);
    console.log("------------ last --------------");
    school.sort(Student.getLNameOrdering()).forEach(print);
    console.log("------------ grade --------------");
    school.sort(Student.getGradeOrdering()).forEach(print);
    
    function thenComparing(...a) {
        return (x,y) => {
            let tent = 0;
            for (let idx = 0; idx < a.length; idx++) {
                let tent = a[idx](x,y);
                if (tent !== 0) return tent;
            }
            return 0;
        };
    }
    
    function reverseComparing(f) {
        return (a,b) => f(b,a);
    }
    
    console.log("------------ first, last, grade --------------");
    
    let order = thenComparing(
            Student.getFNameOrdering(), 
            Student.getLNameOrdering(),
            Student.getGradeOrdering());
    school.sort(order).forEach(print);
    
    console.log("------------ first, last, reverse grade --------------");
    
    order = thenComparing(
            Student.getFNameOrdering(), 
            Student.getLNameOrdering(),
            reverseComparing(Student.getGradeOrdering()));
    school.sort(order).forEach(print);
    
}());

