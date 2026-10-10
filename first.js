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
    // console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
    // 'game1' : 'NFS',
    // 'game2' : 'Spiderman'
}

// for(cost [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in loop
for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "rb", "swift", "java", "python"]

for (const key in arr) {
    // console.log(key);
}

for (const key in map) {
    // console.log(key); map is not itteratable so we can not use it for in for the things which are not ittertable
}

// programming.forEach( function (val) {
//     console.log(val);
// })

programming.forEach( (item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

programming.forEach(printMe)

programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageFileName);
})

// const values = programming.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (nums) => nums > 4) // map never returns but filter retuns
const newNums = myNums.filter( (num)  => {
    return num > 4; // in this only writing num > 4 will not work because after using {} we have started the scope so we need to do explicite return 
})

// console.log(newNums);
// console.log(typeof(newNums)); // object

const newNum = []

myNums.forEach( (num) => {
    if(num > 4) {
        newNum.push(num)
    }
}) // you can also use filter 

// console.log(newNums)

const books = [
  {
    title: "Echoes of the Cosmos",
    genre: "Science Fiction",
    published: 2018,
    edition: 2020
  },
  {
    title: "The Midnight Silhouette",
    genre: "Mystery",
    published: 2021,
    edition: 2025
  },
  {
    title: "Whispers of the Forgotten Kingdom",
    genre: "Fantasy",
    published: 2015,
    edition: 2015
  },
  {
    title: "Beneath the Neon Rain",
    genre: "Cyberpunk",
    published: 2024,
    edition: 2030
  },
  {
    title: "Shadows in the Willow",
    genre: "Horror",
    published: 2012,
    edition: 2020
  },
  {
    title: "The Alchemist's Equation",
    genre: "Historical Fiction",
    published: 2019,
    edition: 2019
  },
  {
    title: "Love in the Time of Algorithm",
    genre: "Romance",
    published: 2023,
    edition: 2026
  },
  {
    title: "Chasing the Horizon",
    genre: "Adventure",
    published: 2016,
    edition: 2020
  }
]

let userBooks = books.filter( (b) => b.genre === 'Romance')

userBooks = books.filter( (b) => {
    return b.published > 2000 && b.genre === 'Romance'
})

// console.log(userBooks);

// const numArr = myNums.map( (num) => {return num + 10})

// console.log(numArr);

const numArr = myNums
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
// chaining

// console.log(numArr)


myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

console.log(myTotal);

// 32:59

