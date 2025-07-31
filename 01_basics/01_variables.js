const accountId = 144553
let accountEmail = "praveen@123google.com"
var accountPassword = "123455"
let accountCity = "Vijayapura"
let accountState =""

// accountId = 3 // TypeEror

accountEmail = "desai@google.com"
accountPassword = "74653374"
accountCity = "Bagalkot"

console.table([accountId,accountEmail,accountPassword,accountCity])

console.log(accountState);


/*
Perfer not to use "var"
because issue in block scope and functional scope
*/