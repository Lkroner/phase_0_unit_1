// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

Create variable Adam using objuect literal notation.

for adam = {
  
}

2. Give adam a name property with the value "Adam".

for adam = {
  name property : give value "Adam"
}

3. Add a spouse property to terah and assign it the value of adam.

for terah = {
  add spouse property: give value variable adam
}

4. Change the value of the terah weight property to 125.

for terah.weight = 125


5. Remove the eyeColor property from terah.

delete terah['eyeColor']

6. Add a spouse property to adam and assign it the value of terah.

for adam.spouse = terah
}

7. Add a children property to terah and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   for terah = {
    add children variable = {
  
    } 
   }

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

   for terah = {
    add children variable = {
      add property carson : give value "Carson"
    } 
   }

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

   for terah = {
    add children variable = {
      add property carter : give value "Carter"

    } 
   }


10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

   for terah = {
    add children variable = {
      add property colton : give value "Colton"

    } 
   }

11. Add a children property to adam and assign it the value of terah children.

for adam = {
  add children variable = {
    add property carson : give value "Carson"
    add property carter : give value "Carter"
    add property colton : give value "Colton"
}


*/

// __________________________________________
// Write your code below.

1. var adam = {
  
}

2. var adam = {
  name : "Adam",
}

3. var terah = {
 spouse : adam,
}

4. terah.weight = 125;


5. delete terah['eyeColor']

6. adam.spouse = terah

7. terah.children = {};

8. terah.children.carson = "Carson"

9. terah.children.carter = "Carter"

10. terah.children.colton = "Colton"

11. adam.children = terah.children



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// What parts of your strategy worked? What problems did you face?

// Only about half of my pseudocode worked, so I had to revisit the object literals page. Also,
// my browser started acting up and not reading the JS properly. Alsoooo, sometimes I would errorneouly
// delete all the contents of an object and then other tests would get mess up because of this so I 
// had to start from the top. Took a litte while but I go there.


// What questions did you have while coding? What resources did you find to help you answer them?

// Object literal page from DBC JS intro.

// What concepts are you having trouble with, or did you just figure something out? If so, what?

// This challenge actually flowed pretty easily for me. Errors above aside.

// Did you learn any new skills or tricks?

// How to add new properties to objects!

// How confident are you with each of the Learning Competencies?

// Define local variables in JavaScript (Confident!)
// Create, add properties to, delete properties from, and access values from JavaScript Object literals (80% confident!)
// Use pre-written tests to drive development (80% Confident)

// Which parts of the challenge did you enjoy?

// When my code passed first time! And also figuring out the cause when it didn't.

// Which parts of the challenge did you find tedious?

// None really.
// 
// 


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)