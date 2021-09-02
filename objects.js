// Objects notes
/*
 Object are a JS data type they hold key and value pairs of data.
 Objects can hold numbers, booleans, strings, arrays and other objects etc.
 */
// curly brackets denote objects, objects REQUIRE two main attributes: *key and *value
let netflix = {
    id: 1,
    name: 'The Office',
    isRunning: false,
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot',
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            }]
        }
    },
    season2: {},
    season3: {}
};

// Use dot and bracket notation to console.log() the episode name of episode 2
console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);


// JSON Object
/*
 - JSON stands for: Javascript Object Notation
 - derived from JSON syntax, JSON format is text only.
 - Exists as a string.
    -Useful when fetching data from a server(back-end application or logic).
    -Needs to be converted to a native Javascript Object if we want to access the data
 */


// Bracket Notation / Property Accessors
// Property Accessors: dot notation ., bracket notation []

//Created a variable that stores an empty object
let superHero = {};

// Target Object as a whole with bracket notation, inject/give a key which is a string
superHero['name'] = 'spider-man';
// Assign a second key and value 
superHero['alterEgo'] = 'Peter Parker';
console.log(superHero);
console.log(superHero['name'], superHero['alterEgo']);
console.log(superHero.name);

//all keys in objects are strings even though they arent wrapped in quotes when represented in the object itself

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);



let spaceObject = {
    "spaces Here": true,
    noSpaces: true
}
// Square brackets is good when we may not be able to use dot notation, BUT is not common
console.log(spaceObject.noSpaces);
console.log(spaceObject["spaces Here"]);