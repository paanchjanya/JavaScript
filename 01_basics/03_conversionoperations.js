let age = "Praveen"

// console.log(typeof age);
// console.log(typeof(age));

let ValueInNumber = Number(age)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn;
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// "" => false
// "edfrf" => true

let sum = 128
let stringSum = String(sum)
// console.log( typeof stringSum);


// ************************ Operations *************** //

let value = 3
let negValue = --value
// console.log(negValue);

// console.log(8%2);

let s1 = "Hello, "
let s2 = "World";
// console.log(s1+s2);

// console.log("1"+2);
// console.log(1+"2");

// console.log("1"+2+2);

// console.log(1+2+"7");

// console.log((3+4)*5%3);

// console.log(-false);
// console.log(+"");

let gameCounter = 100
++gameCounter
// console.log(gameCounter);

let x = 3
const y = x++
console.table([x,y])

let a = 3
const b = ++a
console.table([a,b])