/*
Types of functions
- function declaration
- function expression
- anaonymous function
*/

declaration();


//Function declaration: are hoisted, run when we call them(invoke)
function declaration() {
    console.log("I'm a Function declaration.");
}

//expression(); <-- error example because they are not hoisted

//Function expression: Are NOT hoisted and are stored in a variable
// We use the variable name to run the function
let expression = function () { //<-- an example of AN ANONYMOUS function
    console.log("I am a function expression!");
}

expression();

