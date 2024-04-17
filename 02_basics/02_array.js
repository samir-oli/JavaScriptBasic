const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// //spread

// const All_new_heros = [...marvel_heros, ...dc_heros]
// console.log(All_new_heros)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9,[10, 11,12]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// 
console.log(Array.isArray("samirOli"))
console.log(Array.from("samirOli")) // to convert to array
console.log(Array.from({name: "samirOli"})) // Interesting 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

