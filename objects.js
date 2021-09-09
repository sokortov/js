// 1 exercise, about cars
var car = {
    color: "black"
};

car.color = "green";
car.power = function() {
    console.log("power is 100");
};


// 2 exercise, about apples and pears
var warehouse = {
    apples: 0,
    pears: 0,
    summ: function() {
        console.log(this.apples + this.pears)
    }
};

// 3 exercise, about terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let savedName = "Ivan";

readline.question("What's your name?", (name) => {
name.toLowerCase() == savedName.toLowerCase() ? console.log('Hi ' + savedName + '!') : console.log('No such name')
readline.close()
})

// 4 exercise, about type of argument
function getTypeOf(value){
    console.log(typeof value);
};

// 5 exercise, about prime numbers
function isPrimeNumber(number){
    for(var i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
};
