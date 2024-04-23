function sayMyName() {
console.log("S")
console.log("A")
console.log("M")
console.log("I")
console.log("R")
}
sayMyName

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2)
}


function addTwoNumbers(num1, num2) {
    let result = num1 + num2

    // console.log("samir")

    return num1 + num2 

    console.log("samir")
}


 const result = addTwoNumbers(3, null) 
console.log("Result: ", result)


// other ways to take parameter 

function LoginUserMessage(username = "sam"){
    if(username === undefined) { // if(!username)
        console.log("Please enter a username")
        return

    }
    return `${username} just Logged In`
}
// console.log(LoginUserMessage("samir"))
console.log(LoginUserMessage()) // undefined
console.log(LoginUserMessage("hemraj")) // undefined

