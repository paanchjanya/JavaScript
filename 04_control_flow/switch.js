// Using `Switch` Statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "mar"
switch(month) {
    case "jan": console.log("Jan"); break;
    case "feb": console.log("Feb"); break;
    case "mar": console.log("Mar"); break;
    case "apr": console.log("Apr"); break;
    case 5: console.log("May"); break;
    case 6: console.log("Jun"); break;
    case 7: console.log("Jul"); break;
    case 8: console.log("Aug"); break;
    default:
        console.log("Out of Bound.");
        break;
        
}