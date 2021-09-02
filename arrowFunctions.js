/*
- Also called Fat Arrow Functions
- They are NOT (function) declarations
- Do NOT get hoisted
- Two types:
    Concise Body --> Renturn is automatic
    Block Body --> Return is not automatic
    A concise way to write function expressions
*/

//CONCISE BODY
// speak('dog') wont work because concise bodies are not hoisted
//----------------------------------------------------------- example 1
let speak = (name) => console.log(`The ${name} goes woof!`)
speak('dog');

//----------------------------------------------------------- example 2
let firstName = "peter";
let lastName = "parker";

let concatination = (first, last) => `${first} ${last}`
let fullName = concatination(firstName, lastName);
console.log(fullName)



// BLOCK BODY
// Use {curly braces} to contain the logic
//------------------------------------- example 1
let speakAgain = name => {
    console.log(`The ${name} goes woof - this is line 27 console log`);
}

speakAgain('dog');
//------------------------------------- example 2

let conCatName = (first, last) => {
    return `${first, last}`
}

let newFullName = conCatName(firstName, lastName);
console.log(newFullName);


//------------------------------------- example 3
let x = 27;
let y = 47;
//          place holders
let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);
console.log(returnedValue);
//-------------------------------
