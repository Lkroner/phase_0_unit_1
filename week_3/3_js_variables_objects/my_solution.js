// I paired with Morgan on this challenge and finished it alone.




// Pseudocode
// 
// 
// 
// 


// __________________________________________
// Write your code below.

1. Create variable secretNumber
   Assign secretNumber variable a number value

2. Assign secretNumber variable the number 7

3. Create variable password
   Assign password variable a string value

4. Assign password variable the string value 'just open the door'

5. Create variable allowedIn
   Assign allowedIn variable a boolean expression

6. Assign allowedIn variable a boolean expression that computes false.

7. Create variable members
   Assign members variable an array

8. Assign members variable an array where first element in the value of members is 'John'

9. Assign members variable an array where fourth element in the value of members is 'Mary'

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// My solutions:

1. secretNumber = 7
2. secretNumber = 7
3. password = "string"
4. password = "just open the door"
5. allowedIn = 3 > 2
6. allowedIn = 3 < 2
7. var members = [1, 2, "cats"];
8. members[0] = "John";
9. members[3] = "Mary";

// After considering my answers I wouldnt change them because:

// - The code is concise. It is short and I think especially using the index number to assign new
// array values in problems 8 and 9 was a quick and efficient to do so. I cant think of a way to 
// shorten my code more than I allready have.
// - I guess where some of my solutions can be duplicated, they should be because then I could
// just list them once. Thats the only way I can think to apply the D.R.Y principle.

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// What parts of your strategy worked? What problems did you face?

// There were a couple psuedo codes instances where I was not specific enough and had to add in a few words.

// What questions did you have while coding? What resources did you find to help you answer them?

// The only questions I had to look up were remember the syntax for creating an array and the
// shortcut keys for commenting out multiple lines(command + /).

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// Didnt really struggle with this challenge. Although I wish the guidelines had been abit more specific.
// I paired with Morgan for the reading part because we thought that was what was suggested to pair on, which 
// ended up being a waste of time in terms of working together. It should specify to do the reading BEFORE pairing
// and then work on the exercizes together.

// Did you learn any new skills or tricks?

// Although I knew a bit of Javascript before this lesson it was nice that it was cross-compared
// to Ruby. Knowing the differences between the two is very important. I learned that JS doesnt have a hash object.
// It does have a semi-equilvalent called object literals. This was the first Id heard of them. 
// Also, learned a few small differences like Ruby and JSs syntax sugar is different. Mostly, you can do most of 
// the same things in JS as you can in Ruby. You just have to go about it a bit differntly.

// How confident are you with each of the Learning Competencies?

// Define local variables in JavaScript (Very confident!)
// Create objects of different types in JavaScript (Confident!)
// Create and add objects to an array in JavaScript (Very confident!)
// Use pre-written tests to drive development (Confident!)

// Which parts of the challenge did you enjoy?

// I enjoyed manipulating JS, hope to get familiar with more complex stuff.

// Which parts of the challenge did you find tedious? 

// Psuedo code is still a bit tedious for me as I wanted to just jump into the problems
// themselves. Im sure Ill need though when it comes to figuring out more complex problems.

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

