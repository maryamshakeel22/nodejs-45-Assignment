"use strict";
// Question no 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//equality
let city = "Sanghar";
console.log("Is city equal to Sanghar?I predict True");
console.log(city === "Sanghar");
//unequality
console.log("Is city equal to Sanghar?I predict False");
console.log(city !== "Sanghar");
//lower case
let Name = "Maryam Shakeel";
console.log("Is name is correct in lower case?I predict true");
console.log(Name.toLowerCase() === "maryam shakeel");
//numerical
//equal
let num = 2;
console.log("Is num equal to number?I predict true");
console.log(num === 2);
//unequal
console.log("Is num not equal to number?I predict false");
console.log(num === 5);
//greater than
console.log("Is number greater than?I predict true");
console.log(num > 1);
//less than
console.log("Is num less than?I predict false");
console.log(num < 1);
//greater than or equal to
console.log("Is number greater than or equal to?I predict true and false");
console.log(num <= 2);
// less than or equal to
console.log("Is number greater than or equal to?I predict true and false");
console.log(num <= 2);
// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
let condition3 = true;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(condition1 && condition3);
console.log(condition1 || condition3);
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];
console.log("Is value include in array so?I predict true ");
console.log(fruits.includes("banana"));
// Test whether an item is not in an array
console.log("Is value not include in array so?I predict false ");
console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));
