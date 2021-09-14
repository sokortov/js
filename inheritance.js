// 1 exercise about inheritance

function Animal(name) {
    this.name = name;
    this.canWalk = true;
};

var animal = new Animal("animal");

function Cat(name) {
    this.name = name;
};

Cat.prototype = animal;

var cat = new Cat("cat");

Animal.prototype.move = function(n) {
    this.distance = n;
    console.log(this.distance);
};

cat.move(2);
