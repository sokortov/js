// 1 exercise, about films array
let films = ['Titanic', 'Kill Bill', 'Lion king'];

for (let film of films) {
  console.log(film);
};

// 2 exercise, about car manufacturers
let manufacturers = ['BMW', 'Audi', 'Lada'];
let str = manufacturers.join(', ');
let arr = str.split(', ');

// 3 exercise, about names
let friends = ['Ivan', 'Petr', 'Victor']
friends.forEach(function(element, index) {
  this[index] = "Hello " + friends[index];
}, friends);

// 4 exercise, about modification array to boolean
let numbersArr = [1, 0, -1, 5, 2]
let boolArr = []

for (let i=0; i<numbersArr.length; i++) {
    numbersArr[i] > 0 ? boolArr.push(true) : boolArr.push(false);
};

// 5 exercise, about descending sort
let numbers = [1, 6, 7, 8, 3, 4, 5, 6];
numbers.sort((a, b) => b - a);

// 6 exercise, about array filtering
let result = numbers.filter(element => element > 3);

// 7 exercise, about index of a concrete value
function getIndex(arr, element) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == element) res.push(i);
    };
    console.log(res)
};

// 8 exercise, about cycle until "a" became less than 10
var a = 20;
while (a >= 10) {
    console.log(a);
    a--;
};

// 9 exercise, about prime numbers
n = 20;
nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
};

// 10 exercise, about odd numbers
nextOdd:
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) continue nextOdd;
    console.log(i);
};
