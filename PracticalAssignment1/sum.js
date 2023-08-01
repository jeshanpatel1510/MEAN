const prompt = require('prompt-sync')();

let n1 = prompt("Enter Num1 : ");
let n2 = prompt("Enter Num2 : ");
let sum = parseInt(n1)+parseInt(n2);

console.log("Sum of "+n1+" + "+n2+" = "+sum);