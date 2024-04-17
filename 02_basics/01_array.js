// Array in js are resizeable, 

const myArray = [0, 1, 2, 3, 4, 5]
const myHero = ["samir", "james"]

// Array Methods
// myArray.push(9)
// myArray.pop([1])
// console.log(myArray)

// myArray.unshift(10) // adds at the begining of the array
// console.log(myArray)
// myArray.shift()


// const NewArr = myArray.join()
// console.log(myArray)
// console.log(NewArr);


// Slice , Splice 
console.log("A", myArray)

const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1,3)
console.log("C", myArray)

// console.log(myn1)

console.log(myn2)

//  Splice provides an array whose elements are deleted and orignal array is shown removing spliced 

