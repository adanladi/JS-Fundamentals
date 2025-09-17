#!/usr/bin/node
// Get the number of arguments (excluding node and script path)
const argCount = process.argv.length - 2;

// Use switch statement to determine which message to print
switch(argCount) {
    case 0:
        console.log("No argument");
        break;
    case 1:
        console.log("Argument found");
        break;
    default:
        console.log("Arguments found");
        break;
}
