/*
Two General Phases when we run code:
- Creation Phase
  Any variable (let, var, const) and function in our code are stored for memory.
  - Execution Phase:
    Values are assigned to the variable and functions that were stored to the memory during the create phase

    The left of the assignment operator (=) is stored to memory, right side is assigned during execution
*/

/*
( create )    ( execute )
let variable = value;
*/

// 1. 'num' has been hoisted - JS recognized our variable, it knows it exist
// 2. JS reads top to bottom, when we called our console.log first, it doesnt get the value of 'num'
//console.log(num)
// let num = 12;

dookie();

function dookie() {
    console.log('Hello')
    let hi = 'Hola'
    console.log(hi)
}

varFunc();

let varFunc = function () {
    console.log('Anything');
}

varFunc();