// #1

// This is an in-line comment.

/* This is a 
multi-line comment */


// #2

var myName;

// #3

// Setup
var a;
a = 7;
// Only change code below this line


// #4


// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line


// #5


var a = 9;

// #6

var myFirstName = 'Kirill';
var myLastName = 'Budkevich';

// #7

// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

// #8

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// #9

let catName = "Oliver";
let catSound = "Meow!";
// Ошибка в отличии от var !!!

// #10

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// #11

const sum = 10 + 10;

// #12

const difference = 45 - 33;

// #13

const product = 8 * 10;

// #14

const quotient = 66 / 33;

// #15

let myVar = 87;

// Only change code below this line
myVar++;


// #16

let myVar = 11;

// Only change code below this line
myVar--;

// #17

const myDecimal = 5.7;

// Only change code below this line

// #18

const product = 2.0 * 2.5;

// #19

const quotient = 4.4 / 2.0; // Change this line

// #20

const remainder = 11 % 3;

// #21

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;


// #22

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;


// #23

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;


// #24

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


// #25

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// #26

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// #27

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// #28

const myStr = "This is the start." + " This is the end."; // Change this line

// #29

let myStr = 'This is the first sentence.';
myStr += ' This is the second sentence.';

// #30

// Only change code below this line
const myName = "Kirill";
const myStr = "My name is " + myName + " and I am well!";

// #31

// Change code below this line
const someAdjective = "JavaScript";
let myStr = "Learning to code is ";
myStr += someAdjective;

// #32

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


// #33

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line


// #34

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World" // Change this line
// Only change code above this line

// #35

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// #36

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// #37

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// #38

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

// #39

// Only change code below this line
const myArray = ['string', 1];

// #40

// Only change code below this line
const myArray = [[1, 2, 3], 'string', false];

// #41

const myArray = [50, 60, 70];
let myData = myArray[0];

// #42

// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;

// Only change code below this line

// #43

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

// #44

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

// #45

// Setup
const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop();
// Only change code below this line

// #46

// Setup
const myArray = [["John", 23], ["dog", 3]];
let removedFromMyArray = myArray.shift();
// Only change code below this line

// #47

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(['Paul', 35]);
// Only change code below this line

// #48

const myList = [
    ['Chocolate', 13],
    ['Milk', 1],
    ['Bananes', 7],
    ['Oranges', 3],
    ['Alcohole', 1]
];

// #49

function reusableFunction() {
    console.log('Hi World');
}

reusableFunction();

// #50

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(5, 2);

// #51

function timesFive(x) {
    return x * 5;
}

// #52

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// #53

function myLocalScope() {
    // Only change code below this line
    let myVar = "scope";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// #54

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    const outerWear = 'sweater';
    // Only change code above this line
    return outerWear;
}

myOutfit();

// #55

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive() {
    sum += 5;
}

// Only change code above this line

addThree();
addFive();

// #56

// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line

// #57

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift()
    return item;
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// #58

function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
}

// #59

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';

    // Only change code above this line

}

// #60

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// #61

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// #62

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// #63

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

// #64

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

// #65

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

// #66

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

// #67

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

// #68

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

// #69

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);

// #70

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }
    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

// #71

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }


    // Only change code above this line
    return result;
}

testElse(4);

// #72

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }

    else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

// #73

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

// #74

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return 'Tiny';
    }
    else if (num < 10) {
        return 'Small';
    }
    else if (num < 15) {
        return 'Medium';
    }
    else if (num < 20) {
        return 'Large';
    }
    else if (num >= 20) {
        return 'Huge';
    }
    // Only change code above this line
}

testSize(7);

// #75

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line

    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }

    // Only change code above this line
}

golfScore(5, 4);

// #76

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1);

// #77

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1);

// #78

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Mid';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

// #79

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 'bob':
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

// #80

function isLess(a, b) {
    return a < b;
}

isLess(10, 15);

// #81

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// #82

let count = 0;

function cc(card) {
    // Only change code below this line

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            count;
            break
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    if (count > 0) {
        return count + ' Bet';
    }
    else {
        return count + ' Hold';
    }

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// #83

const myDog = {
    // Only change code below this line
    name: 'Richi',
    legs: 4,
    tails: 1,
    friends: ['I', 'eat']

    // Only change code above this line
};

// #84

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

// #85

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line

// #86

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

// #87

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = 'Happy Coder';

// #88

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'bow-bow';

// #89

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

// #90

// Setup
function phoneticLookup(val) {
    let result = "";
    const lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: 'Denver',
        echo: 'Easy',
        foxtrot: 'Frank'
    }
    // Only change code below this line
    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

// #91

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    else {
        return 'Not Found';
    }
    // Only change code above this line
}

// #92

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
    }
];


// #93

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

let gloveBoxContents = undefined;
gloveBoxContents = myStorage.car.inside['glove box'];

// #94

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

let secondTree = "";

secondTree = myPlants[1].list[1];

// #95

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop != 'tracks' && value != "") {
        records[id][prop] = value;
    }
    else if (prop == 'tracks' && !records[id].hasOwnProperty(prop)) {
        records[id][prop] = [value];
    }
    else if (prop == 'tracks' && records[id].hasOwnProperty(prop)) {
        records[id][prop].push(value);
    }
    if (value == "") {
        delete records[id][prop];
    }
    return records;
}

// #96

// Setup
const myArray = [];

let i = 0;
while (i <= 5) {
    myArray.unshift(i);
    i++;
}
// Only change code below this line

// #97

// Setup
const myArray = [];
for (let i = 1; i <= 5; i++) {
    myArray.push(i);
}
// Only change code below this line

// #98

// Setup
const myArray = [];

for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
}
// Only change code below this line

// #99

// Setup
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
// Only change code below this line

// #100

// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
// Only change code below this line

// #101

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);

// #102

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
}
while (i < 5);

// #103 - Рекурсия

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    }
    else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

// #104

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName && contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
        }
        else if (name === contacts[i].firstName && !contacts[i].hasOwnProperty(prop)) {
            return 'No such property';
        }
    }
    return 'No such contact';

    // Only change code above this line
}

console.log(lookUpProfile("Akira", "lastName"));

// #105

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

// #106

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}

// #107

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}

console.log(randomRange(2, 8));

// #108

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

// #109

function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");

// #110

function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal';
}

checkEqual(1, 2);

// #111

function checkSign(num) {
    return num > 0 ? 'positive'
        : num < 0 ? 'negative'
            : 'zero';
}

checkSign(10);

// #112

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        let array = countdown(n - 1);
        array.unshift(n);
        return array;
    }
}
// Only change code above this line

// #113

let arr = [];
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    }
    else {
        arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }
};

console.log(rangeOfNumbers(1, 5));