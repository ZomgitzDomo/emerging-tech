// var Lion = function(arg1, arg2, arg3) {
//     this.numLegs = arg1;
//     this.tail = arg2;
//     this.name = arg3;
//
//     this.sleep = function() {
//         console.log(this.name + " is sleeping");
//     }
// }
//
// var simba = new Lion(4, "bushy", "Simba");
// var rafa = new Lion(6, "spiky", "Rafa");
//
// // console.log(simba.tail);
// // console.log(rafa.tail);
//
// // simba.sleep();
//
// var Tiger = function(arg1, arg2, arg3) {
//     this.numLegs = arg1;
//     this.tail = arg2;
//     this.name = arg3;
//
//     this.sleep = function() {
//         console.log(this.name + " is sleeping");
//     }
// }
//
// var tigger = new Tiger(12, "ugly", "Tigger");
//
// tigger.sleep();
//
// var Whale = function(arg1, arg2, arg3) {
//     this.fins = arg1;
//     this.tail = arg2;
//     this.name = arg3;
//
//     this.swim = function() {
//         console.log(this.name + " is swimming");
//     }
// }
//
// var bob = new Whale(2, "big", "Bob");
//
// var Snake = function(arg1, arg2, arg3) {
//     this.fangs = arg1;
//     this.tail = arg3;
//     this.name = arg3;
//
//     this.eat = function() {
//         console.log(this.name + " is eating");
//     }
// }
//
// var snakey = new Snake(10, "slimy", "Snakey");
//
// var Gorrila = function(arg1, arg2, arg3) {
//     this.arms = arg1;
//     this.legs = arg2;
//     this.name = arg3;
//
//     this.peeling = function() {
//         console.log(this.name + " is peeling a banana");
//     }
// }
//
// var apey = new Gorrila(2, 2, "Apey");

class Cat {
    constructor(name, tail) {
        this.name = name;
        this.numLegs = 4;
        this.tail = tail;
    }
}

class Lion extends Cat {
    constructor(name, tail) {
        super(name, tail);
        this.mane = true;
        this.coat = "tawny";
    }
}

class Tiger extends Cat {
    constructor(name) {
        super(name);
        this.coat = "striped";
    }
}

class Dog {
    constructor(name) {
        this.name = name;
        this.numLegs = 4;
        this.tail = 1;
    }
}

class Pug extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "10 inches";
    }
}

class Husky extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "1 foot";
        this.weight = "35 to 60 pounds"
    }
}

class Labrador extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "1 foot 9 inches";
        this.weight = "55 to 80 pounds"
        this.breedgroup = "Sporting Dogs"
    }
}

class Beagle extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "1 foot 1 inches";
        this.weight = "18 to 30 pounds";
        this.breedgroup = "Hound Dogs"
    }
}

class Rottweiler extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "1 foot, 10 inches";
        this.weight = "85 to 130 pounds";
        this.breedgroup = "big dogs";
    }
}

class Poodle extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "11 to 15 inches";
        this.weight = "45 to 60 pounds";
        this.breedgroup = "non sporting";
    }
}

class Bulldog extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "1 foot, 3 inches";
        this.weight = "40 to 60 pounds";
        this.announcement = function() {
            console.log("My name is " + this.name);
            return 0;
        }
    }

}

class Chihuahua extends Dog {
    constructor(name) {
        super(name);
        this.cute = true;
        this.height = "6inches to 9 inches";
        this.weight = "3 to 6 pounds";
        this.breedgroup = "companion dogs";
    }
}

var simba = new Lion("Simba", 2);
var bucky = new Bulldog("Bucky");
console.log(simba.tail);

document.getElementById("zooBtn").addEventListener("click", function() {
    document.getElementById("gifid").style.opacity = 1;
    console.log(bucky.announcement());
});