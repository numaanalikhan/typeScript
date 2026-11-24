// question 1 
// // function greetUser(name:string,age:number=0):void{
// //      age==0 ? console.log(name)
// //       : console.log(name ,  age);
// // }
// // greetUser("numaan");

// const greetUser 

// question 2
// const calculatePrice = (price:number, discount:number=10):number=>{
//     let disAmt;
//     disAmt = price * 0.1;
//     return price-disAmt;
// }
// console.log(calculatePrice(1000));

// question 3
// function displayDetails(name:string, age:number):void{
//     console.log(name, age);
// }
// displayDetails("numaan",26);

// question 4
// const findGrade= (marks:number):string=>{
//     if(marks >=90 && marks<=100) return "A";
//     else if(marks>=75 && marks<=89) return "B";
//     else if(marks>=50 && marks<=74) return "c";
//     else if(marks<=50) return "fail";
//     else return "Enter valid marks";
// }

// console.log(findGrade(5.2));

// question 5
// const findTotal =(num:number[]):number=>{
//     let sum:number=0;
//     for (let i of num){
//         sum = sum + i
//     }
//     return sum
// }

// console.log(findTotal([1,2,3,4,5]));

// question 6
// const isEligible = (age:number):boolean=>{
//     return age>=18? true :  false
// }
// console.log(isEligible(20));


const greetUser = (name:string, age?:number):void=>{
    return age!==undefined ? console.log(name, age) : console.log(name);
}
greetUser("numaan", 26);