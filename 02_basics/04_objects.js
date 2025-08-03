

const user = new Object()
user.id = "123abc"
user.name = "Tom"
user.isLoggedIn = true 

// console.log(user);

const requser = {
    email : "praveen@gmail.com",
    fullname : {
        fname : "Praveen",
        mname : "Ashok",
        lname : "Desai"
    }
}
// console.log(requser.fullname?.fname);

const obj1= {
    1 : "a",
    2 : "b",
}
const obj2= {
    3: "c",
    4: "d",
}
const obj3= {
    5: "e",
    6: "f",
}
const res = Object.assign(obj1,obj2,obj3)
// console.log(res);

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "pad@gmail.com"
    },
    {
        id : 2,
        email : "das@gmail.com"
    },
    {
        id : 3,
        email : "ddu@gmail.com"
    }
]

console.log(user);

// console.log("Keys of User: ",Object.keys(user));

// console.log("Values of User: ",Object.values(user));

// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('isLogge/dIn'));
// console.log(user.toLocaleString());


// Object de - structure
const course = {
    coursename : "JS in english",
    price : "499",
    courseInstructor : "Praveen Desai"
}

const{courseInstructor : ci} = course
console.log(ci);

// "JSON"
//  {
//     "name" : "Desai",
//     "coursename128" : "py",
//     "amount" : "free"
//  }

// Array of Objects
// [
//     {},{},{},{},{}
// ]