#!/usr/bin/env node
// index.js
const readline = require('readline');

//Reading data
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//calculate square
function calculateSquare(number) {
  return number * number;
}

rl.question('Enter a number to calculate its square: ', (answer) => {
  const number = parseFloat(answer);

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    const square = calculateSquare(number);
    console.log(`The square of ${number} is: ${square}`);
  }

  rl.close();
});
