"use strict";
// Question no 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Maryam Shakeel";
console.log("lower case:", personName.toLowerCase());
console.log("upper case:", personName.toUpperCase());
console.log("title case", personName.charAt(0).toUpperCase() + personName.slice(1));
