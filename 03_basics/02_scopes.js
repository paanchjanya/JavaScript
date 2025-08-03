
var c = 300
let a = 128
if (true) {
    let a = 10
    const b = 20
    // console.log(a);

}


// console.log(a);
// console.log(b);



function one(){
    const username = "Praveen"

    function two(){
         const website = "youtube"
         console.log(username);
    }
    // console.log(website);
    // two()
}
one()

if(true){
    const username = "Praveen"
    if(username === "Praveen"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



// ========================= interesting ==================== //

function addone(value){
    return ++value
}
console.log(addone(3))

const addone = function(num){
    return value + 2
}