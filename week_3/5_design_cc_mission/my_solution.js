// I worked with Ariel Fogel on this challenge.


// Your mission description:
// We have three characters:

// 1. Princess 
// 2. Black Knight
// 3. Valiant Knight & his Squire Patsy

// The Black Knight has captured the Princess and has whisked her away to his dark liar, Castle Gorglelele. 
// The Valiant Knight (with the help of his Squire Patsy) must navigate through a field a brambles to reach the castle, fight the Dark Knight, 
// rescue the Princess and then escape.
// 
// 

// Pseudocode
//
// Objects: Define initial states and properties:
// Princess position
// Black Knight position, health
// Valiant Knight position
// Brambles #1 position, health
// Brambles #2 position, health
// Brambles #3 position, health
// Brambles #4 position, health
// Door position, health

// Functions: 
// Move Right: Add 1 to x coordinate
// Move Left: Subtract 1 to x coordinate
// Move Up: Add 1 to y coordinate
// Move Down: Subtract 1 to y coordinate
// Attack: Subtract 1 unit of health
// Say 

// Move right 2x
// Move up 1x
// Attack shrubbery
// Move up 2x
// Move right 1x
// Attack shubbery 3x
// Move right 2x
// Attack Black Knight
// Move right 1x
// Attack door
// Escape right 2x

// Grid/Map  (7x10)
//                P
//                D
//     .  . S . . B . .    
//     S
//     .
// K . . 


// Initial Code
var valiantKnight = {
    posx : 0,
    posy : 0
};

var blackKnight = {
    posx : 7,
    posy : 3,
    health : 1
};

var princess = {
    posx : 7,
    posy : 5
};

var shrubberyOne = {
    posx : 2,
    posy : 2,
    health : 1
};

var shrubberyTwo = {
    posx : 4,
    posy : 3,
    health : 3
};

var door = {
    posx : 7,
    posy : 4,
    health : 1
};

function moveRight(){
    this.posx = pos + 1;
}

function moveLeft(){
    posx -= 1;
}

function moveUp(){
    posy += 1;
}

function moveDown(){
    posy -= 1
}


// this.moveRight();
// this.moveRight();
// this.moveUp();
// this.attackNearbyEnemy();
// this.moveUp();
// this.moveUp();
// this.moveRight();
// this.attackNearbyEnemy();
// this.attackNearbyEnemy();
// this.attackNearbyEnemy();
// this.moveRight();
// this.moveRight();
// this.attackNearbyEnemy();
// this.moveRight();
// this.attackNearbyEnemy();
// this.moveRight();
// this.moveRight();

// Refactored Code

// Didnt get through to finish this code.

// Reflection

// What parts of your strategy worked? What problems did you face?

// Since this challenge was open-ended and I was doing this as a pair, it definitely made it more difficult. 
// We both had different ideas of what we should be doing, even though were both new to Javascript. This made 
// it hard to pick our path. We worked for almost three hours and got stuck on how to implement the "this"
// keyword. I think we may have bit off a bit more than we could chew but it was still fun to tackle. 


// What questions did you have while coding? What resources did you find to help you answer them?

// What is "this"?? See below.

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// I found it hard to wrap my brain around "this". Looking at how other DBCers implemented it in their solutions
// cleared this up a bit more. At this point I understand "this" as refering to the object that is being directed.
// This site(http://www.quirksmode.org/js/this.html) elucidated it a bit more, but I'm still confused.

// Did you learn any new skills or tricks?

// Got to practve with Javascript objects and variable a bit more.

// How confident are you with each of the Learning Competencies?

// Define local variables in JavaScript (Fairly)
// Create, add properties to, delete properties from, and access values from JavaScript Object literals (Tenuous)

// Which parts of the challenge did you enjoy?

// I enjoyed putting together the story with Ariel and working out the pseudo code details.

// Which parts of the challenge did you find tedious?

// It got tedious when we couldn't decided which direction to go with the code and felt a bit under equipped with  
// our understanding of JS.
// 