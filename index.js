const readLine = require('readline-sync');

// Example 1
function nameSwapper(first, last){
  let name = last +", "+ first;
  return name;
}

let firstName = readLine.question("Enter first name: ");
let lastName = readLine.question("Enter last name: ");
console.log(nameSwapper(firstName, lastName));

// Example 2
