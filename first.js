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
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})
/*
variables, datatypes, conversion, strings, numbers, date and time in js
arrays, objects
*/
