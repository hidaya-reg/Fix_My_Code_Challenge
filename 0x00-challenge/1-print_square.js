#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2]); // Parse the argument as an integer

if (isNaN(size)) { // Check if the input is not a number
    process.stderr.write("Invalid size. Please provide a valid number.\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    let row = ""; // Store each row
    for (let j = 0; j < size; j++) {
        row += "#"; // Add '#' to the row string
    }
    console.log(row); // Print each row
}
