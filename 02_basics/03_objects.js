// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1")
const JsUser = {
    name: "Praveen Desai",
    "full_name" : "Praveen_Desai",
    age : 23,
    [mySym] : "mykey1",
    location : "Vijayapura",
    isLoggedIn : false,
    lastLogin : ["Monday","Saturday"]
};

// console.log(JsUser["full_name"]);
// console.log(JsUser[mySym]);


JsUser.location = "Bengaluru"
// console.table(JsUser);
// Object.freeze(JsUser)
JsUser.age = 34
// console.table(JsUser);
// console.log(JsUser);

JsUser.greeting = function(){
    return console.log(`Hello Greetings to, ${this.name}`);
    
}
// console.log(JsUser.greeting());
JsUser.greeting()
