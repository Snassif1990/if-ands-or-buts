const pinCode = '1234';

const prompt = require('prompt-sync')();

let num = Number(prompt("Please enter pin: "))

if(num === "1234") {
    console.log("success")
} else {
    console.log("FAILURE")
}