"use strict";
// Question no 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician) {
    for (let show_magicians of magician) {
        console.log(show_magicians);
    }
}
let magicianName = ["black herman", "david", "ricky jay"];
show_magicians(magicianName);
