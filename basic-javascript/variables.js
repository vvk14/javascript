const accountId = 223133
let accountName = "Vivek"
var accountPassword = "123456"
accountCity = "Anand"

/* So basically when we use var for multiple times then it will take the lastest one so please avoid the use of var in some cases */
var accountPassword = "Ram"

console.log(accountId); 
console.log(accountPassword); 

// Table console type
// console.table([accountId, accountName, accountPassword, accountCity]);