// Calculate some Fibonacci numbers to demonstrate 'for'
// loops, arrays, and 'if' statements.

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

var numberToDisplay = prompt("How many numbers do you want?");

var fibs = [];

if (numberToDisplay > 0) {
    fibs.push(0);
    if (numberToDisplay > 1) {
        fibs.push(1);
        for (var i = 2; i < numberToDisplay; i++) {
            fibs.push(fibs[i - 2] + fibs[i - 1]);
        }
    }
}

console.log(fibs); 
