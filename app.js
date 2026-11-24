"use strict";
// question 1
// let Fname:string = "Bozai Numaan Ali Khan";
// console.log(Fname);
// question 2 
// let age:number = 26;
// console.log(age);
// question 3
// let isStudent:boolean = true;
// console.log(isStudent);
// question 4
// let three_variables:[string,number,boolean]= ["bozai numaan ali khan", 26, true];
// for(let i:number=0; i<3; i++ ) 
//     console.log(three_variables[i]);
// question 5 
// let arr:[] = [1,2,3,4,5,6];
// the above should not be declared.
// let arr:[string|number] = [1, "numaan"];
// the above will not happen because
// its not an array, but its a tuple beacuse in square bracket
let arr = ["numaan", "ali khan", 2, "bozai", 5];
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
