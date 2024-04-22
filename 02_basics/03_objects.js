// //  through constructor----singleton


// // object literals to create object 

// // const mysym = Symbol("key1")

const mySym = Symbol("Key1")

const jsUser = {
    name: "samiroli",
    "full_name": "samiroli",
    [mySym]: "myKey1", // syntax for writing symbol names
    // Object.freeze(jsUser),
    email: "samir@gmail.com",
    isLoggedIn: false,
    lastLoginDas: ["Monday", "saturday"]

 }

console.log(jsUser.email) // 1 way of accessing user information
console.log(jsUser["email"]) //  2nd way accesiing string
console.log(jsUser["full_name"])
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])


jsUser.email = "samiroli1001@gmail.com"

jsUser.email = "samiroli90001@gmail.com"
console.log(jsUser)



// Functions

jsUser.greeting = function() {
    console.log("hello Js USer")

}
jsUser.greetingtwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
