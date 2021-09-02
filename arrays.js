/*
ex:
    let array = [value, value, value, value];
index position:  0        1      2     3
*/

let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]); // Returns the value at the 0 index

// .length with an array:
console.log(arr.length);
console.log(arr[arr.length - 1]);

//Using an array constructor, uses new keyword 
let test = new Array();
console.log(test);
console.log(test.length)

//Created an aempty array with 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);
//We targeted a specific index/key, we "assigned" it a proper value 
test2[0] = 'New Value';
console.log(test2);

//Initializing an array values
let nums = Array(1, 2, 3, 4, 5);
console.log(nums);
//console.log(typeof nums);

let array2 = Array("array1", "array2", "array3");
console.log(array2);
console.log(array[2]);

// ******* METHODS ********
// Methods are a way to pull out and or manipulate the data within our arrays.


//forEach(), method runs a function over each index of the array
let boardGames = ['Scrabble', 'Chess', 'Monopoloy', 'DnD', 'Clue'];

for (i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
};

// Consice Body Arrow Function
boardGames.forEach(game => console.log(`Concise: ${game}`));
//boardGames.forEach(game => console.log(typeof game));


// Block Body Arrow Function
boardGames.forEach(game => {
    console.log(`Block: ${game}`)
});

// Anonymous Function 
boardGames.forEach(function (game) {
    console.log(`anon ${game}`);
})



// Various other methods:
//Array.length -> returns the number of elements in the array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.length);

// Array.push() -> adds an element to the end of the array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

// Array.pop() -> removes the last element of the array and returns that element
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() -> adds a new element at the beginning of the array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppingList.unshift('cake')
console.log(shoppingList)

// Array.shift() -> removes the first elemnent in the array, and returns the element
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppingList.shift()
console.log(shoppingList);


// Array.map() -> transforms the elements in the original array
// by calling the given function once for each item or element in the array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.map(item => item.toLocaleUpperCase()));

// Array.filter() -> creates a new array with only the elements that pass the test in a given function
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')));

// Array.find() -> returns the first element in the array that passes a test given in a function
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> executes a given function for each value of the array and returns a single value
let cost = [2.00, 3.00, 4.00, 13.00];
console.log(cost.reduce((total, cost) => total + cost));

//Array.includes() -> determines wether an array has a specific element, returns boolean value
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));


// Array.indexOf() -> search the array for a specific element and returns its first index. Returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'))
console.log(shoppingList.indexOf('pears'));

// Array.findIndex() -> returns the index of the first element in a array that passes a test given in a function
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

// Array.every() -> checks if all elements in a array pass a test given as a function
// if there is one element that returns a false value, the function returnd false and does not check the rest of the elements
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 7));

// Array.concat() -> merge two or more arrays and returns a new array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, returns a new array. It selects the elements starting
// at the provided start argument, and ends at, but does *not* include the provided end argument
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.slice(0, 3));

// Array.splice() -> add/removes elements in an array and returns their new elements. First argument takes in an 
//integer that specifies what index to add/remove element. 
//Second argument takes in the number of items to be removed. optional third argument takes in the new elements to be added to the array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppinglist.splice(2, 1); // removes kemon slices
console.log(shoppingList);

let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
shoppingList.splice(2, 1, 'cherries')
console.log(shoppingList);

// Array.sort() -> sorts the items in an array. The sort order can be either alphabetic or numeric, 
//and with ascending or descending. By defauly, sort() orders the values as strings in alphabetical
//and ascending order. Can take in a compare function which indicates if you want to sort by ascedning
// or descending order.
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let cost = [3, 2, 13, 4];
console.log(cost.sort((a, b) => b - a));
//want to sort by ascending order
console.log(cost.sort((a, b) => a - b));

//Array.reverse() -> reverses the order of elements in an array
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

//Array.string() -> converts an array into a string
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

//Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "seperator", which
//indicates how the elements will be seperated. Default seperator is a comma.
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.join("! and "));


//Es6 features: spread operator. The spread operator is indicated by these 3 dots "..." expands the contents of the array
//and takes it out of the array structure
let shoppingList = ['celery', 'limes', 'kemon slices', 'grenadine', 'oranges'];
console, log(...shoppingList);
