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


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 800)) // undefined //;


//

const user = {
    username: "sameer",
    price: 500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
(handleObject(user)) // undefined;



handleObject(user)
handleObject({
    username: "samieerr",
    price: 201
})

const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
   


}
console.log(returnSecondValue(myNewArray))
