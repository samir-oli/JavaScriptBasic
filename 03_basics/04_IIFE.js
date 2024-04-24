

// Immediately Invoked Function Expressions
// to remove pollution from global variables 

(function chai(){
    // named IIFI
    console.log(`Db Connected`);
})();



( (name) => {
    console.log(`DB connected two`);
})("samir")