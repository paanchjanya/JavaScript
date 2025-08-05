const coding = ["js","ruby","java","python","cpp"]

const result = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(result);


const myNums = [1,2,3,4,5,6,7,8,9,10]
// Filter method
const res = myNums.filter( (num) => {
    return num > 5
})
// const res = myNums.filter( (num) => num > 4)
// console.log(res);

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    } 
})
console.log(newNums);
