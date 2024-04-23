// // const tinderUser = new Object() // singleton object

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "samir"
// tinderUser.isLoggedIn = false




// // console.log(tinderUser)

// const regularUser = {
//     email: "samiroli1001@gmail.com",
//     fullName: {
//         userfullname: {
//                 firstname: "samir",
//                 lastname: "oli"
//             }
    

//         }
//     }
// // console.log(regularUser.fullName);
// // console.log(regularUser.fullName.userfullname);
// // console.log(regularUser.fullName.userfullname.firstname);
// // console.log(regularUser.fullName?.userfullname.firstname); // (optional chaining (?))if there is no fullNmae check for it


// const object1 = {1: "a", 2: "b", 3: "c"}
// const object2 ={5: "d", 6: "e"}
// const object3 ={7: "f", 8: "g"}


// // const object3 = { object1, object2}const object = Object.assign({}, object1,object2, object3)
// // console.log(object)
// const obj4 = {...object1, ...object2, ...object3}
// console.log(obj4)


// // most used syntax

// const users =[
//     {
//         id: 1,
//         email: "samir1234.com"
//     },
//     {
//         id: 1,
//         email: "samir1234.com"
//     },
//     {
//         id: 1,
//         email: "samir1234.com"
//     },


// ]
// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser)) // gives array inside array of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// object destructuring
const course = {
    cousename: "js in hindi ",
    price: "999",
    courseInstructor: "samir"

}
// console.courseInstructor
const {courseInstructor: instructor} = course
console.log(instructor)
// console.log(instructor)

{
    "name": "samir",
    "coursename": "Javascript in hindi",
    "price": "free"
}

[
{},
{},
{}
]





