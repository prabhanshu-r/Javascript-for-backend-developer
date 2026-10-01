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

newDate.toLocaleString('default', {
    weekday: "Long"
})