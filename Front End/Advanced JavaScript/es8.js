// .padding
// .padend

let patient = "Yourself";
patient.padEnd(10);

let fun = (a,b,c,d,) => {
    // the ending comma.
    console.log(a)
};

// accessing objects and values.
//    object.values
//    object.entries
//    object.keys

let objec = {
    username: "grinch",
    payment: "rudolf",
    user: "santa"
};

Object.values(objec).forEach(name => console.log(name));
Object.keys(objec).forEach(name => console.log(name));
Object.entries(objec).forEach(name => console.log(name));

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// trim is also the opposit of pad.
// it adds the parameter so anything you add over there, shall be.


// #3) Get the below object to go from:
let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
// to this:
//'my name is Rudolf the raindeer'
let sebastian = `my ${Object.values(obj)[0]} is ${Object.values(obj)[1]} the ${Object.values(obj)[2]}
console.log(sebastian)


