// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Lauren Kroner
//  2. Joe Webb


// 1. "YOU SIGNED... WHO?!"
 
var sethRogan = new Client("Seth Rogan", 32, "I HATE Justin Beiber")

var ryanGosling = new Client("Ryan Gosling", "the perfect age", "Hey girl...") 

// 2. "Here they Come!"

var adamSandler = new Client( "Adam Sandler", 45, "That's your home! Are you too good for your home?!")

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman.")

// 3. "TIME IS MONEY!"

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!"

var clients = [sethRogan, ryanGosling, adamSandler, jimCarrey, kristenBell];

var display = function(clients) {
    for (var i=0; i < clients.length; i++) {
        alert("My client:" + clients[i].name + ", is " + clients[i].age + " years old and likes to say " + clients[i].quote);
    };
};

display(clients)

// ** BONUS **

var Jack = new Client("Jack Nicholson", 77, "All work and no play makes Jack a dull boy.")
clients.push(Jack)

//  Your Reflection:

// What parts of your strategy worked? What problems did you face?

// Most of the strategies we tried to employed worked. However, we ran into an issue with console.log not
// properly displaying in Chrome Dev tools, which is what we were using to test and run our code. Also, Joe
// and I didnt know what a constructor function was, once Mohit directed us to that in our problem we learned 
// how to execute it pretty easily.

// What questions did you have while coding? What resources did you find to help you answer them?

// I googled this issue and found this response on Stack Overflow(http://stackoverflow.com/questions/15745899/console-log-not-working-in-chrome)
// , which I tried and it fixed the issue:

// "Most likely, you have some JavaScript in your code that overwrites console.log for compatibility reasons 
// (this will also affect the console of the applications tab). You can verify that by pressing F12 in this 
// tab and checking that console.log still works fine."

// Will definitely keep this is mind for next time.

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// I was not familiar with the constructor function at all, so Im glad I got some exposure to it.

// Did you learn any new skills or tricks?

// Constructor model and the important of testing console to begin with!

// How confident are you with each of the Learning Competencies?

// Create and manipulate objects in JavaScript (Fairly)
// Use functions in JavaScript (Fairly)
// Debug using Node's error messages (Fairly)

// Which parts of the challenge did you enjoy?

// I enjoyed it when are code worked! Otherwise it was frustrating getting to that point.

// Which parts of the challenge did you find tedious?

// Trying to figure out what was wrong with a code that actually worked but we didnt know it!


