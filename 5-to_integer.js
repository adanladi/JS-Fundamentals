// Get the first argument
const firstArg = process.argv[2];

// Convert to integer and check if it's a valid number
const number = Number(firstArg);

// Check if it's a valid integer (not NaN and no decimal part)
if (!isNaN(number) && number === Math.floor(number)) {
    console.log(`My number: ${number}`);
} else {
    console.log("Not a number");
}
