// for-each loop
const coding = ["js","ruby","java","python","cpp"]

// Using Arrow function
coding.forEach((element) => {
    // console.log(element);
    
});

// Using Basic Layout
coding.forEach(function(item){
    // console.log(item);
    
})

// Another method
function printMe(item){
    // console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item,index,arr) =>{
    // console.log(item,index,arr);
    
})

// Common scenrios
// ["","",""]
// [{},{},{}]

const myCoding = [
{
    languageName : 'javascript',
    languageFileName : 'js',
},
{
    languageName : 'python',
    languageFileName : 'py',
},
{
    languageName : 'c++',
    languageFileName : 'cpp',
}
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
    
})