/***************************************************
 * Classic "FizzBuzz" Developer Interview Question *
 ***************************************************/
 
 // c.f. http://blog.codinghorror.com/why-cant-programmers-program/
 // c.f. http://en.wikipedia.org/wiki/FizzBuzz
 
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
 
 // Note: the first if clause could be removed if console.log
 // didn't automatically add a newline. In this case, a
 // newline output would be added after the if-else-if-else
 // construct.

for (var i = 1; i < 21; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("FizzBuzz");
    } else if ((i % 3) === 0) {
        console.log("Fizz");
    } else if ((i % 5) === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/* Or, this less readable option:

for (var i = 1; i < 21; i++) {
    var n = ((i % 3) ? "" : "Fizz") + ((i % 5) ? "" : "Buzz");
    console.log(n.length ? n : i);
}

*/
