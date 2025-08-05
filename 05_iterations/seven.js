const myNums = [1,2,3,4,5,6,7,8,9,10]

const res = myNums.map( (num) => num + 10 )
// console.log(res);

// myNums.forEach( (nums) => {
//     console.log(nums + 10);
    
// })


// Chaining
const newNums = myNums.map( (num) => num *10 ).map((num) => num + 1).filter((num) => num >40 )
// console.log(newNums);

// reduce
const numbers = [1,2,3]
const total = numbers.reduce( function (acc,nos) {
    // console.log(`acc: ${acc} and nos: ${nos}`);
    
    return acc + nos
},0)
// console.log(total);

const mytotal = numbers.reduce((acc,cur) => acc + cur,0)
console.log(mytotal);


const shoppingCart = [
    {
        itemName : "js-course",
        price : 2999
    },
     {
        itemName : "data science",
        price : 12999
    }, {
        itemName : "js-python",
        price : 3999
    }, {
        itemName : "cpp-python",
        price : 4999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);
