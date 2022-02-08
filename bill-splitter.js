const prompt = require('prompt-sync')();

let person1 = Number(prompt("How much has person 1 paid? "));
let person2 = Number(prompt("How much has person 2 paid? "));
let bill = Number(prompt("How much is the bill? "));

let equalSplit = bill / 2;

if((person1 === equalSplit) && (person2 === equalSplit)) {
    console.log("You have perfectly split the bill.")
} else if(equalSplit == person1) {
    let result = equalSplit - person2;
    console.log("Person 2 owes $" + result)
} else if(equalSplit = person2) {
    let result = equalSplit - person1;
    console.log("Person 1 owes $" + result)
} else if((equalSplit !== person1) || (equalSplit !== person2)) {
    let result = equalSplit - person1;
    let result2 = equalSplit - person2;
    console.log("Person 1 still owes $" + result + " and Person 2 still owes $" + result2);
} else if(person1 > equalSplit) {
    let result = person1 - equalSplit;
    console.log("Person 2 owes Person 1 $" + result)
} else if(person2 > equalSplit) {
    let result = person2 - equalSplit;
    console.log("Person 1 owes Person 2 $" + result)
}