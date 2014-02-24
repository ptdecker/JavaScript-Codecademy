/*
* Better coin flipper than the lesson example
*/

do {
    var coinFace = Math.floor(Math.random() *2);
    if (coinFace === 0) {
        console.log("Heads! Flipping again...");
    } else {
        console.log("Tails! Done flipping.");
    }
} while (coinFace === 0);
