// this is a new yet old phenomnon simply the same thing but wiht different words.
// javascript is likely a reference type langauge and uses classes.
// constructor is init()
// this is self()
// when creating a new variabel you use new. i think this is because the

//class schoolteacher {
//    
//    // constructor is likely equivalent to init.
//    constractor(shoes, tie, belt, cane) {
//        this.shoes = shoes;
//        this.tie = tie;
//        this.belt = belt;
//        this.cane = cane;
//    }
//    walksIntheClassroom() {
//        console.log("goodmorning Sir");
//    }
//    
//    Kidmisbehaves() {
//        console.log(`you are about to catch these hands ${this.cane}`);
//        console.log(`boy watch out for the ${this.belt}`);
//    }
//}
//
//let teacher = new schoolteacher("toy", "one", "two", "three");

class player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    introduce() {
        console.log(`hi i am ${this.name}, i am a ${this.type}`)
    }
}

// then if you wish to update you can simple use the end.

class wizard extends player {
    constructor(name, type, frank) {
        super(name, type);
        this.frank = frank;
    }
    
    play() {
        console.log(`weeee i am ${this.type} playing wiht ${this.frank}`)
    }
}

let bass = new wizard("john", "jame", "Hamal");
let spectator = new wizard("simba", "sports", "club");

