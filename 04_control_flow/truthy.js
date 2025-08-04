// const useremail = "pad@gmail.ai"
const useremail = []

// turthy values example
// if(useremail) console.log("Got User Email.");
// else console.log("Don't have user email.");


// falsy values

//  false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}, 

// if (useremail.length === 0) {
//     console.log("Array is Empty.");
    
// }

// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("emptyObject keys are empty");   
// }

// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');


// Nullish Coalescing Operator (??) : null undefined

let var1;
// var1 = 5 ?? 10
// var1 = null ?? 10
// var1 = undefined ?? 15
var1 = null ?? 10 ?? 15


console.log(var1);


// Ternary Operator
// syntax
// condition ? true : false;

const iceface = 100
iceface >= 80 ? console.log("Less than 80") : console.log("Greater than 80")
