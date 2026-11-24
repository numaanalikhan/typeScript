"use strict";
// before level 2 some questions
// question1 
// let arrBool:boolean[] = [true,false,true,true,false];
// for (let i:number=0; i<arrBool.length; i++)
//     console.log(arrBool[i]);
// question 2
// let tupPro:[string, number, boolean];
// tupPro = ["realMe phone", 20000, true];
// for(let i:number=0; i<=tupPro.length-1; i++)
//     console.log(tupPro[i]);
// question 3
// let varUkn:unknown;
// varUkn=2
// console.log(typeof varUkn );
// question 4
let varUni;
let student = [
    { id: 1, name: "heena", age: 19 },
    { id: 2, name: "daniya", age: 20 },
    { id: 3, name: "summaiya", age: 22 }
];
for (let i = 0; i < student.length; i++)
    console.log(student[i].name);
