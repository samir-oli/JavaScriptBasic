const userEmail = []

if(userEmail) {
    console.log("got user email");

}else{
    console.log("Dont have user email");
}


// falsy values =>

// false, 0, ~0, BigInt 0n, "", null, undefined, NAN


// truthy values
// "0", "false", " ", [], {}, function(){}


if (userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(userEmail).length == 0){
    console.log("print empty object");
}


// Nullish coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10 ?? 50 ?? 70


console.log(val1);
console.log(val2);

//  terniary operator

const iceTeaPrice = 200
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less  than ");