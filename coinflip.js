/*
* Better coin flipper than the lesson example
*/

/* To run this in JSFiddle, set HTML to:

<div id="console-log"></div>

CSS to:

{
.console-line
    font-family: monospace;
    margin: 2px;
}

And uncomment:

var consoleLine = "<p class=\"console-line\"></p>";
 
console = {
    log: function (text) {
        $("#console-log").append($(consoleLine).html(text));
    }
};

*/

// If it wasn't an excercise where Code Academy is looking for specifics,
// I would use a Ternary instead of the if-else construct
//
// console.log(coinFace === 0 ? "Heads! Flipping again..." : "Tails! Done flipping.")

do {
    var coinFace = Math.floor(2 * Math.random());
    if (coinFace === 0) {
        console.log("Heads! Flipping again...");
    } else {
        console.log("Tails! Done flipping.");
    }
} while (coinFace === 0);
