/*
Time to practice variables! Follow the comments for instructions. Be sure to
test your work by running your code and the test specs!
*/

// 1. Declare a variable called `firstName` and assign it your first name
//    as a string:
let firstName = 'Jennifer';


// 2. Declare a variable called `lastName` and assign it your last name
//    as a string:

let lastName = 'Williams'; 


// 3. Declare a variable called `age`:

let age; 


// 4. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

console.log(firstName + " " + lastName + " " + age);


// 5. Assign the `age` variable to a number:

age = '44';


// 6. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

console.log(firstName + " " + lastName + " " + age);


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const obj = {};
try { obj.firstName = firstName; } catch {}
try { obj.lastName = lastName; } catch {}
try { obj.age = age; } catch {}
module.exports = obj;
