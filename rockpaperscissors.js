/**************************************
* Simple "Rock, Paper, Scissors" Game *
***************************************/

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

// Get the human player's choice

var userChoice = prompt("Do you choose rock, paper or scissors?");

// Generate computer's choice

var computerChoice = Math.random();

if (computerChoice < 0.33) {
	computerChoice = "rock";
} else if(computerChoice > 0.66) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

console.log("Computer: " + computerChoice);

// Helper function to see if the both choices match two particular values (i.e.
// one of the choices is one value and the other choice is the other value. This
// helps simplify and make the winning logic easier to read.

var areThey = function(value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return(true);
    } else if (value1 === choice2 && value2 === choice1) {
        return(true);
    }
    return(false);
}

// Determine which of the choices made is the winner or if there is a tie

var compare = function(choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return("rock wins");
    }
    return("it's a tie!");
}

// Show the results

console.log(compare(userChoice, computerChoice));
