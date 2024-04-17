let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate)

let MyDate = new Date(2023, 11, 6)
let MyDate = new Date(2023, 11, 6, 5, 3)
let MyDate = new Date(2023, 11, 6, 5, 3)

let MyDate = new Date("2023-01-14")
console.log(MyDate)



console.log(MyDate.toLocaleString());

let MyTimestamp = Date.now()
// console.log(MyTimestamp)
// console.log(MyDate.getTime())
console.log(Math.floor(Date.now()/1000))

let NewDate = new Date()
console.log(NewDate)
console.log(NewDate.getDay())


