"use strict";
// Question no 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let fav_fruit = ["Mango", "grapes", "Banana"];
console.log(fav_fruit[1]);
if (fav_fruit.includes("Mango")) {
    console.log("You really like Mango!");
}
if (fav_fruit.includes("Pomegrante")) {
    console.log("You really like pomegrante");
}
if (fav_fruit.includes("Orange")) {
    console.log("You really like orange");
}
if (fav_fruit.includes("Banana")) {
    console.log("You really like Banana!");
}
if (fav_fruit.includes("Pear")) {
    console.log("You eally like Pear");
}
