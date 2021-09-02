/*
Scope is simply hiearchy of variables within our code.
- Global Scope or Parent Scope
- Local Scope or Child Scope
*/

let global = 'Earth';

function scopeExample() {
    let local = 'Indianapolis'
    console.log(local);
    console.log(`${local} is but one of many cities on ${global}`);
}

scopeExample();
// Local variable will not be accessed by the function
//console.log(local);