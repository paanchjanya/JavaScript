// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
let getemail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

// const bigNumber = 37376387436832746487324684763432642384736484684638473463872463278882993n

// console.log(typeof bigNumber);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman","CaptainAmerica","Thor","Hulk"]
let myobject = {
    name : "Praveen",
    age : 22
}

const myFunction = function (){
    console.log("Hello, World!");
    
}

// console.log(typeof heros);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack (Primitive), Heap (Non-primitive)

let oldname = "Ironman"
let newname = "Captain America"
newname = "Hulk"

console.log(newname);
console.log(oldname);

let userOne = {
    name : "Praveen",
    age : 23
};

let userTwo = userOne
// console.log(userTwo);
userTwo.name = "Santosh"
console.log(userTwo);

console.log(userOne);

