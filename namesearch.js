/**
* Find all occurrences of a name within a string ignoring case 
*/

// Get string to search with and string to search for

var text   = prompt("Give me a string to search:");
var myName = prompt("What is your name?");

// Find all matches using a regular expression and ignoring case

var hits = text.match(new RegExp(myName, "gi"));

// Display any matches found

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}  
