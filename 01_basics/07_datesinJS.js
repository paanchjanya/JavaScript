// Date

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());



// const myCreatedDate = new Date(2004,0,24,14,30)
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("2024/01/22")
// console.log(Math.floor(myCreatedDate.getTime()/1000));

// const myCreatedDate = new Date("24-11-2006")
// console.log(myCreatedDate.toLocaleString);  O/P is different as you accept.

// let TimeStamp = Date.now()
// console.log(TimeStamp);


let newDate = new Date()
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('Default', {
    weekday : "long",
}))



