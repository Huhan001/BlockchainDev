// includes() was added.
// ** as a denotation of power. x ** 2 means x to the power of 2.

const pets = ["cats", "dog", "bat"];
pets.includes("dog");
pets.includes("lion");

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes("john");


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.filter(name => name.includes("John")))

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
let calculatedpower = (first, second) => first ** second;
calculatedpower(4,2);

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
calculatedpower(4,10000);
//infinity
