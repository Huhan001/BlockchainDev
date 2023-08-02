// let & constant
// so oyu can change a property of a constant but you cant change the constants variable.

// destructure
const obj = {
    player: "boby",
    experience: 100,
    wizzardlevel: false
}

//const player = obj.player;
//const experience = obj.experience;
//const wizzardleve = obj.wizzardlevel;

// const {play, exp} = obj;
// this is possible because i couldnt create a list over there in the naming convention
// this didnt work because the syntax is supposed to be a matching convention.

const {player, experience} = obj;
let {wizzardleve} = obj;

const a = "sebastian";
const b = "david";
const c = 100;

const javel = {a,b,c}; // so if it doesnt change, then there is no need to change it.

// template strings
// `` or other knows as backtricks.
// so for string interpolation use `${ inhereplease }`
console.log(`hello there ${a} you must be having a fine ${b}, keep it ${c}`);


function rambo(gun = "", magazine = "packed", bullets = 90) {
    return `shoot them with a ${gun}, make sure it is ${magazine} and get more ${bullets}`;
}

// arrow funciton.
let jetlee = (gun = "", magazine = "packed", bullets = 90) => {
return `shoot them with a ${gun}, make sure it is ${magazine} and get more ${bullets}`;
}
let paspom = (drink = " ", tastes = "good") => `this ${drink} tastes realy ${tastes}`;

// closure funciton.
// A degree of inheritence.
let close1 = (bread, butter) => (biscuits) => bread * (biscuits + butter);
let close2 = close1(2,5);
close2(11);

// currying
let carry1 = (bread) => (butter) => bread + butter;
let curry2 = carry1(10);
curry2(8);
carry1(90)(9);

//=====================================================================
//Arrrays

const array = [1,2,3,4,5,6,7];
const double = []
array.forEach((num) => {
    // redundant
    double.push(num * 2);
})

array.forEach((num) => console.log(num * 10));
console.log(double);

// map
// has always got to return something.
// can be used to generate or create new arrays. unlike for each which simply only loops.
const newnumber = array.map((num) => num * 2);
console.log(newnumber);

// filter
const filtered = array.filter(num => num > 5);
console.log(filtered);

// reduce
// a combined method that takes both takes.
const reducedarray = array.reduce((acc, num) => {
    return acc > num
}, 0);
console.log(reducedarray)

// flatmap
// check wiht bard. 
const flatmaps = array.flatMap(num => num > 3);
console.log(flatmaps.at(true))

// Advanced Objects.
object.assign({}, obj)
{...ob}
to avoid the reference purpose. 