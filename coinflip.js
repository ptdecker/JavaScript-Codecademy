/***************
 * Flip a Coin *
 ***************/

/* To run this in JSFiddle (jQuery 2.0.1)
 * source: http://www.wkoorts.com/wkblog/2013/01/26/console-log-with-jsfiddle/)
 
Set HTML to:

<div id="console-log"></div>

CSS to:

{
.console-line
    font-family: monospace;
    margin: 2px;
}

And uncomment:

var consoleLine = "<p class=\"console-line\"></p>";

// Note: This doesn't handle arrays very well (PTD)

console = {
    log: function (text) {
        $("#console-log").append($(consoleLine).html(text));
    }
};

*/

// If it wasn't an excercise where Codecademy is looking for specifics,
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
