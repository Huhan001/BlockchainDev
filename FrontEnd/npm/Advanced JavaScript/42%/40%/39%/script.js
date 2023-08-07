var database = [
    {
        username: "Hans",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "1234"
    },
    {
        username: "ingrid",
        password: "1234"
    }
];




var newfeed = [
    {
        username: "Bobby",
        timeline: "soo tired of the studying"

    },
    {
        username: "sally",
        timeline: "whats going on in here"

    },

    ];

var usernamePrompt = prompt("whats your username?")
var passwordPrompt = prompt("whats your password?")

 function signin(user, pass) {
 	if (user == database[0].username && 
 		pass == database[0].password) {
 		console.log(newfeed);
 	} else if (
 		user !== database[0].username && 
 		pass == database[0].password) {
 		alert("Incorrect username please");
 	} else if (
 		user == database[0].username && 
 		pass !== database[0].password) {
 		alert("Wrong password");
 	}
 }

 signin(usernamePrompt, passwordPrompt);

function lookatall(user,pass) {

    for (var i = 0; i < database.length; i++) {
        if (database[i].username == user &&
			database[i].password == pass) {
            console.log(newfeed)
        } else {
            alert("sorry ")
        }
    } 
}

lookatall(usernamePrompt, passwordPrompt)




 var todo = [
 	"clean",
 	"brush teeth",
 	"excercise",
 	"study javascript",
 	"eat healthy"
 	];

 for (var i=0; i < todo.length; i++) {
 	console.log(todo[i] + "!")
 } 


 var counter = 0;
 while (counter < 10) {
 	console.log(counter);
 	counter++
 }


 var countertwo = 10
 do {
 	console.log(countertwo);
 	countertwo --;
 } while (countertwo > 0);



 function sayhello() {
 	console.log("hello");
 }

 sayhello(); 

 var saybye = function () {
 	console.log("hello bye")
 }

 saybye()

 function sing(asong) {
 	console.log(asong)
 }

 sing("my name is ");
 sing("may name is slim shady");
 sing("my name is ");
 sing("may name is slim shady");

 function multiply(a, t) {
 	var as = a * t;
 	// console.log(as);
 	return as
 }

 function alongOne() {
 	var w;
 	alert(w = prompt("what is your gender ?"));

 	if (w =="male") {
 		alert("how may i help you?");
 		return "good morning sir!";
 	} else {
 		return "good morning madam!";
 	}
 }


 function CheckingDriversAge() {

 	var age;
 	age = prompt("what\'s your age ?")

 	if (Number(age) > 18) {
 		alert("Powering on, Enjoy your ride!");
 	} else if (Number(age) < 18) {
 		alert("break yourself 👋🏽")
 	} else if (Number(age) == 18) {
 		alert ("Congratulations you are good to go!")
 	}

 }


 function checkingage2(b) {

 	if (b > 18) {
 		console.log("Powering on, Enjoy your ride!");
 	} else if (b < 18) {
 		console.log("break yourself 👋🏽");
 	} else if (b == 18) {
 		console.log("Congratulations you are good to go!");
 	}
 }


 var hapana = [
 {
 	username: "andy",
 	password: "srerererer"
 },
 {
 	username: "randy",
 	password: "srere334343434"
 }
 ]


 var face = {user1:{
 	username: prompt("whats your username"),
 	password: prompt("whats your password")},
 	user2:{
 	username: prompt("whats your username"),
 	password: prompt("whats your password")},
 	user3:{
 	username: prompt("whats your username"),
 	password: prompt("whats your password")}
 }

 var database = [face.user1, user2, user3]

 var newsdeed = [{info:database}, {timeline:"things"}]


