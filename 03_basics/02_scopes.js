// let a = 10
// const b =20
// var c = 30
// console.log(a)
// console.log(b)
// console.log(c)
// var c = 300 
{} // scope is just curly braces

let a = 300
if (true) {
let a = 10
const b =20
console.log("Inner: ", a)

}
console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "samir"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one()


// ++++++++++++++++++++Interesting+++++++++++++++++

function addOne(value){
    return value + 1
    addOne(5)

}

const addTwo = function(value){ // way or writing functions
    return value + 2
    addTwo(5)
}