
const user = {
    username : "praveen",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// const res = function chai(){
//     let username = "praveen"
//     console.log(this.username );
    
// }



const chai = () =>{
    let username = "praveen"
    console.log(this.username);
}
// chai()


// Arrow Functions
// const addtwo = (n1, n2) => n1 + n2

// Implicit return
// const addtwo = (n1,n2) => (n1 + n2)


const addtwo = (n1, n2) => ({username : "praveen"})


console.log(addtwo(2,3))

// const myArray = [2,3,4,5,7,5,4,3]
// myArray.forEach()