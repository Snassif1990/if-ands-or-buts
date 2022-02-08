const prompt = require('prompt-sync')();

let person1 = Number(prompt("How much has person 1 paid? "));
let person2 = Number(prompt("How much has person 2 paid? "));
let person3 = Number(prompt("How much has person 3 paid? "))
let bill = Number(prompt("How much is the bill? "));

let equalSplit = bill / 3;

if((person1 === equalSplit) && (person2 === equalSplit) && (person3 === equalSplit)) {
    console.log("You have perfectly split the bill.")
} else if((equalSplit == person1) && (equalSplit == person3)){
    let result = equalSplit - person2;
    console.log("Person 2 owes $" + result)
} else if((equalSplit == person2) && (equalSplit == person3)) {
    let result = equalSplit - person1;
    console.log("Person 1 owes $" + result)
} else if((equalSplit == person1) && (equalSplit == person2)){
    let result = equalSplit - person3
    console.log("Person 3 owes $" + result)
} else if((equalSplit !== person1) && (equalSplit !== person2) && (equalSplit !== person3)) {
    let result = equalSplit - person1;
    let result2 = equalSplit - person2;
    let result3 = equalSplit - person3;
    console.log("Person 1 still owes $" + result + " and Person 2 still owes $" + result2 + " and Person 3 still owes $" + result3);
} else if((person1 > equalSplit) && (person1 > person2) && (person1 > person3)) {
    let result = person1 - equalSplit;
    let result2 = equalSplit - person2;
    let result3 = equalSplit - person3;
    console.log("Person 2 owes Person 1 $" + result2 + " and Person 3 owes Person 1 $" + result3)
} else if ((person2 > equalSplit) && (person2 > person1) && (person2 > person3)) {
    let result = person2 - equalSplit;
    let result2 = equalSplit - person1;
    let result3 = equalSplit - person3;
    console.log("Person 1 owes Person 2 $" + result2 + " and person 3 owes person 2 $" + result3)
} else if ((person3 > equalSplit) && (person3 > person1) && (person3 > person2)) {
    let result = person3 - equalSplit;
    let result2 = equalSplit - person1;
    let result3 = equalSplit - person2;
    console.log("Person 1 owes Person 3 $" + result2 + " and Person 2 owes Person 3 $" +result3)
}