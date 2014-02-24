// Calculate some Fibonacci numbers to demonstrate 'for'
// loops, arrays, and 'if' statements.

var numberToDisplay = prompt("How many numbers do you want?");

var fibs = [];

if (numberToDisplay > 0) {
    fibs.push(0);
    if (numberToDisplay > 1) {
        fibs.push(1);
        for (i = 2; i < numberToDisplay; i++) {
            fibs.push(fibs[i - 2] + fibs[i - 1]);
        }
    }
}

console.log(fibs); 
