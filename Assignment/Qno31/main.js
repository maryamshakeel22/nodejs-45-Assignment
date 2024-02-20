"use strict";
// Question no 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
let no_users = ["Kamla", "Haram", "Pariwish", "Aqsa"];
console.log(`${no_users}"We need to find some users!"`);
no_users.splice(0, 4);
console.log(`${no_users}remove the all users`);
