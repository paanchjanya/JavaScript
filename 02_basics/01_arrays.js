// Arrays
// [] - Brackets
// () - Parenthesis
// {} - curly brackets

const myArray = [0,1,2,3,4,5]
// console.log(typeof myArray);

const mixedArray = [1,2.4,"Praveen",true,null,undefined]
// console.log(typeof mixedArray);

const array = new Array(1,2,3,4,5)
// console.log( typeof array);


// +++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++ //

const numbers = [0,1,2,3,4,5]
// numbers.push(6)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);
// numbers.unshift(128)
// console.log(numbers);


// console.log(numbers.includes(2));
// console.log(numbers.indexOf(20));

// const newArray = numbers.join("__")
// console.log(typeof numbers);
// console.log(typeof newArray);


// Slice, Splice
console.log("A:", numbers);

const myarr = numbers.slice(1,3)
console.log(myarr);
console.log("B:", numbers);

const myarr2 = numbers.splice(1,3)
console.log("C:",numbers);

console.log(myarr2);
