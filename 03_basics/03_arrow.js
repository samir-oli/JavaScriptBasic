const user = {
    username: "samir",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)

    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this) // return {}/object


// function Pencil(){
//     console.log(this);

// }
// Pencil()


const Pen = function() {
    let username = "samir"
    console.log(this.username);
}
Pen()

const Pencil = () => {
        let username = "samir"
        console.log(this.usernmae);

}
Pencil()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// if curly braces use return and if () no neeed return ir implicit return

// const addtwo = (num1, num2) =>  (num1 + num2)
// console.log(addtwo(5, 7))

const addtwo = (num1, num2) =>  ({username: "samir"})
console.log(addtwo());

const Array = [1, 2, 3, 4]
