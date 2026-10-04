let a, b
// console.log(`a:${b}, b:${a}`) 


const str = new String("Hello")

// console.log(typeof(str))

// we can apply many string methods on str same we can do with number


// console.log(Temporal.Now.instant())

let myDate = new Date()

// console.log(myDate.toJSON());

let myCreatedDate = new Date(2026, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getMonth()+1);

// newDate.toLocaleString('default', {
//     weekday: "Long"
// })

const allHeros = ['a', 'b', 'c']
const marvel_heros = [ 'v', 'b', 'x']

// const all_new_heros = {...marvel_heros, ...allHeros}
const all_new_heros = [...marvel_heros, ...allHeros]

// console.log(all_new_heros);

function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prabhanshu"))
// console.log(loginUserMessage())


// function calculateCartPrice(num1) {
//     return num1
// }
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 399
// })
/*
variables, datatypes, conversion, strings, numbers, date and time in js
arrays, objects
*/


const addTwo = (num1, num2) =>({username: "hitesh"}); // arrow function

// console.log(addTwo(3,4))

(function open(){
    // console.log(`DB CONNECTED`)
})();
// IIFE Immediately Invoked Function Expression

// to avoid the pollution of global scope 

( () => {
    // console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    // console.log(`DB CONNECTED TWO ${name}`);
})("Prabhanshu");


//execution code + call stack

//conditonal statemnt !== === 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard & 2==3) {
    // console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    // console.log("User logged in");
}

const month = 3

switch (month) {
    case 3:
        // console.log("march");
        break;
    case 2:
        // console.log("february");
        break;
    default:
        // console.log("april");
        break;
}

// truthy and falsy

// const userEmail = "prabhanshu@gmail.com"
const userEmail = []

if(userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Don't have user email");
}

// falsy values - false, 0, -0, Bigint 0n, "", null, undefined, NaN

// truthy values - [], {}, function(){}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}

// false == 0, false == '', 0 == '' - true

//Nulliish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5 ?? 10

val1 = null ?? 10 // seafty cheacker 

// console.log(val1)

// Terniary Operator

// condition ? true : false

let num = 7

num = (num < 10) ? 10 : 9

// console.log(num);


// const start = (x) => (return x + x); xxx
// const start = (x) => (x+x);
const start = (x) => {
    return x+x;
};

let score = 1;

do {
    // console.log(`Score is &{score}`);
    score++
} while (score <= 10)

// Heigher order array loops

// [{}, {}, {}]
// ["", "", ""] 

const arr = [1, 2, 3, 4, 5]

// for-of loop
// for (const iterator of Object) {

// }

for (const nums of arr) {
    // console.log(num);
}

//6:49sec

// Map - object, holds key value pairs, unique and ordered

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}