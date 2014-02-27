/**
* Find all occurrences of a name within a string ignoring case 
*/

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

// Get string to search with and string to search for

var text   = prompt("Give me a string to search:");
var myName = prompt("What is your name?");

// Find all matches using a regular expression and ignoring case

var hits = text.match(new RegExp(myName, "gi"));

// Display any matches found
//
// If not trying to meet the terms of the excercise, I would have
// implemented this as:
//
// console.log(hits === null ? "Your name wasn't found!" : hits);

if (hits === null) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}  
