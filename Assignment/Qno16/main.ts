// Question no 16

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

let more_guest:string[]=["Ambreen","Alisha","Hadia","Oma","Rubaisha","Abeeha","Saira"]
console.log(more_guest)
let newmore_guest:string[]=["Ambreen","Alisha","Hadia","Oma","Abeeha","Saira"]
newmore_guest.unshift("Kalsoom")
console.log(newmore_guest)
let last_guest:string[]=["Ambreen","Alisha","Hadia","Oma","Abeeha","Saira"]
last_guest.push("Laiba")
console.log(last_guest)
let new_invite:string[]=["Ambreen","Alisha","Hadia","Oma","Abeeha","Saira "]
new_invite.map((items)=>(
console.log(`${items} You are still invite for dinner`)))