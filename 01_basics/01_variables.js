const accountId = 1234
let accountEmail = "samiroli@gmail.com"
var accountPassword = "12345"
var accountCity = "Kathmandu"
/*
 Do not use var because of issue in  block scope and functional scope

*/
console.log(accountId);
console.table([accountId, accountEmail, accountCity])