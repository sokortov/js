// 1 exercise, about letters string
let letersString = 'ahb acb aeb aeeb adcb axeb';
let letersRegexp = /a[a-z]{1}b/g;
let matchLetters = letersString.match(letersRegexp);

// 2 exercise, about numbers string
let numbersString = '2+3 223 2223';
let numbersRegexp = /\d+\+\d+/g;
let matchnumbers = numbersString.match(numbersRegexp);

// 3 exercise, about date and time
var now = new Date();
let day = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();
console.log('Year ' + year + '\n' + 'Month ' + month  + '\n' + 'Day ' + day);
