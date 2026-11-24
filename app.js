"use strict";
// aliases are used to create our own data type.
// OBJECTS VS ALIASES VS INTERFACES
// ALIASES 
// PRIMITIVE TYPE ALIASES --> THEY ACCEPT SINGLE DATA TYPE.
// import { vehicle ,Employees, Students} from "./data"
// let ertiga:vehicle = {
//     brand:"suzuki",
//     model: 2024,
//     price: 1200000
// }
// let indigo:vehicle = {
//     brand: "tata",
//     model: 2007,
//     price: 350000
// }
// let employee:Employees[] =[
//     {id:101,isDeath:false,name:"numaan",salary:25000},
//     {id:202,isDeath:false,name:"mohan",salary:12341243}
// ]
// for (let emp of employee){
//     if(emp.salary>50000)
//         console.log(emp);
// }
// let heena:Students[]= [
//     {id:1, name:"heena Begum", email:"heena@gmail.com",marks:25},
//     {id:2, name:"daniya kaleem", email:"daniya@gmail.com", marks:30},
//     {id:3, name:"summaiya farheen", email:"summaiya@gmail.com", marks:40}
// ]
// question 4
// let varUion:string | number;
// function checkType(type:string | number):void{
//     if(typeof type==="string") console.log(type.length);
//     else if(typeof type==="number") console.log(type**2);    
// }
// varUion = 12
// checkType(varUion)
// question 5 
let arrNumb = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arrNumb) {
    sum = sum + num;
}
console.log(sum);
