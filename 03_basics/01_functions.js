function sayMyName(){
    console.log("Praveen");
    
}
// sayMyName()

function add(n1, n2){
   
    return n1 + n2
    
}
let sum = add(2,3)
// console.log(sum);

function loginUserMessage(username="Tom"){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
const message = loginUserMessage("abc")
// console.log(message);


// (...) -> rest operator and spread operator
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(100,200,300,400,500));

const user = {
    username : "Praveen",
    age : 22
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}
// handleObject(user)


handleObject({
    name : "Praveen",
    age : 34
})

const myArray = [200,4000,500,700]
function anyValue(getArray){
    return getArray[1]
}
// console.log(anyValue(myArray));
console.log(anyValue([200,4000,500,500]));

