// Iterations - for(){}, while(){}, do-while(){}, 
// Statements - break, continue


for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number.");
        
    }
    // console.log(element);
}

// for (let i = 1; i < 11; i++) {
//     // console.log(`Outer loop value: ${i}`);
    
//     for (let j = 1; j < 11; j++) {
//         console.log(i + '*' + j + ' = ' + i*j);
//         ;
        
//     }
    
// }

// myArray = ["Ironman","Spiderman","Thor","CaptainAmerica","Hulk"]
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
    
// }

// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log("Dectected 5");
//         break;

//     }
//     console.log(`Value of i is: ${index}`); 
// }

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(`Value of i is: ${i}`);
    
}