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
];

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

// server.js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create the server and define what it does when a request comes in
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/**
 * ARCHITECTURE OVERVIEW:
 * 1. Reactive Engine: Tracks dependencies using JavaScript Proxies and triggers a scheduler.
 * 2. Virtual DOM: Represents UI structures as raw JavaScript objects.
 * 3. Diffing/Patching Engine: Efficiently mutates the real DOM only where changes occurred.
 * 4. Batched Scheduler: Groups multiple rapid state modifications into a single animation frame.
 */

// ==========================================
// 1. THE REACTIVE ENGINE (Dependency Tracker)
// ==========================================
let activeEffect = null;

class ReactiveStore {
  constructor(initialState, onUpdate) {
    this.deps = new Map();
    this.onUpdate = onUpdate;
    this.state = this._createReactiveObject(initialState);
  }

  _createReactiveObject(target) {
    const store = this;
    return new Proxy(target, {
      get(obj, prop) {
        // Track the current active rendering effect as a dependency of this property
        if (activeEffect) {
          if (!store.deps.has(prop)) store.deps.set(prop, new Set());
          store.deps.get(prop).add(activeEffect);
        }
        return obj[prop];
      },
      set(obj, prop, value) {
        if (obj[prop] === value) return true;
        obj[prop] = value;
        // Trigger all tracked effects for this property change
        const effects = store.deps.get(prop);
        if (effects) {
          effects.forEach(effect => effect());
        }
        return true;
      }
    });
  }
}

// ==========================================
// 2. VIRTUAL DOM COMPILER & UTILITIES
// ==========================================
function h(tag, props, ...children) {
  return { tag, props: props || {}, children: children.flat() };
}

// Helper to convert V-Nodes into genuine Browser DOM nodes
function createRealDOMNode(vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(vnode);
  }

  const \$el = document.createElement(vnode.tag);

  // Set structural element attributes
  for (const [key, value] of Object.entries(vnode.props)) {
    if (key.startsWith('on') && typeof value === 'function') {
      \$el.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      \$el.setAttribute(key, value);
    }
  }

  // Recursively append children
  for (const child of vnode.children) {
    \$el.appendChild(createRealDOMNode(child));
  }

  return \$el;
}

// ==========================================
// 3. THE DIFFING AND PATCH ENGINE
// ==========================================
function diff(oldVNode, newVNode) {
  // Case 1: Old node doesn't exist, append new node
  if (oldVNode === undefined) {
    return (\(parent) => {\)parent.appendChild(createRealDOMNode(newVNode));
      return \$parent.lastChild;
    };
  }

  // Case 2: New node dropped entirely, remove old node
  if (newVNode === undefined) {
    return (parent, currentElement) => {
      parent.removeChild(currentElement);
      return undefined;
    };
  }

  // Case 3: Text node changes
  if (typeof oldVNode !== typeof newVNode || 
     ((typeof oldVNode === 'string' || typeof oldVNode === 'number') && oldVNode !== newVNode)) {
    return (parent, currentElement) => {
      const \(newElement = createRealDOMNode(newVNode);\)parent.replaceChild(newElement, currentElement);
      return \$newElement;
    };
  }

  // Case 4: Node type tags differ completely (e.g., <div> changed to <section>)
  if (oldVNode.tag !== newVNode.tag) {
    return (parent, currentElement) => {
      const \(newElement = createRealDOMNode(newVNode);\)parent.replaceChild(newElement, currentElement);
      return \$newElement;
    };
  }

  // Case 5: Same element tag, reconcile attributes and children
  return (parent, currentElement) => {
    // 5a. Patch properties/attributes
    const oldProps = oldVNode.props || {};
    const newProps = newVNode.props || {};

    for (const [key, val] of Object.entries(newProps)) {
      if (val !== oldProps[key]) {
        if (!key.startsWith('on')) \$currentElement.setAttribute(key, val);
      }
    }
    for (const key of Object.keys(oldProps)) {
      if (!(key in newProps)) \$currentElement.removeAttribute(key);
    }

    // 5b. Core Recursive Reconciliation of child arrays
    const oldChildren = oldVNode.children;
    const newChildren = newVNode.children;
    const commonLength = Math.min(oldChildren.length, newChildren.length);

    // Patch elements that overlap
    for (let i = 0; i < commonLength; i++) {
      const childPatch = diff(oldChildren[i], newChildren[i]);
      childPatch(currentElement, currentElement.childNodes[i]);
    }

    // Append remaining new elements
    if (newChildren.length > oldChildren.length) {
      for (let i = commonLength; i < newChildren.length; i++) {
        \$currentElement.appendChild(createRealDOMNode(newChildren[i]));
      }
    }

    // Remove obsolete old elements
    if (oldChildren.length > newChildren.length) {
      for (let i = oldChildren.length - 1; i >= commonLength; i--) {
        currentElement.removeChild(currentElement.childNodes[i]);
      }
    }

    return \$currentElement;
  };
}

// ==========================================
// 4. BATCHED RENDERING APPLICATION MOUNT
// ==========================================
function mountApp(rootElement, appComponent, initialState) {
  let oldVNode = null;
  let \$root = rootElement;
  let isScheduled = false;

  // The rendering pipeline
  const updatePipeline = () => {
    activeEffect = updatePipeline; 
    const newVNode = appComponent(store.state);
    
    if (!oldVNode) {
      // First structural insertion
      \$root.appendChild(createRealDOMNode(newVNode));
      root = root.lastChild;
    } else {
      // Delta rendering calculation via diff patches
      const patch = diff(oldVNode, newVNode);
      \$root = patch(root.parentNode, root);
    }
    
    oldVNode = newVNode;
    activeEffect = null;
  };

  // Batched Scheduler utilizing microtasks / requestAnimationFrame
  const scheduler = () => {
    if (isScheduled) return;
    isScheduled = true;
    requestAnimationFrame(() => {
      updatePipeline();
      isScheduled = false;
    });
  };

  const store = new ReactiveStore(initialState, scheduler);
  
  // Kickstart initial render loop
  updatePipeline();
  
  return store.state;
}

// ==========================================
// 5. DEMONSTRATION WORKLOAD (Execution)
// ==========================================

// Create a component UI model using our hyperscript layer `h()`
const App = (state) => {
  return h('div', { class: 'container', style: 'font-family: sans-serif; padding: 20px;' },
    h('h1', {}, 'Reactive Custom V-DOM Engine'),
    h('p', {}, `Engine Counter state: `, h('strong', {}, state.count)),
    h('button', { 
      onclick: () => { state.count += 1; }, 
      style: 'padding: 8px 16px; margin-right: 8px; cursor: pointer;' 
    }, 'Increment +1'),
    h('button', { 
      onclick: () => { 
        // Showing off microtask batching - multiple updates executed synchronously, 
        // but the scheduler only performs ONE actual DOM re-render!
        state.count += 10;
        state.count += 10;
        state.count += 10;
      }, 
      style: 'padding: 8px 16px; cursor: pointer;' 
    }, 'Batch Add +30'),
    h('h3', { style: 'margin-top: 20px;' }, 'Dynamic Item List:'),
    h('ul', {},
      // Generates list components iteratively out of data arrays
      ...Array.from({ length: Math.min(state.count, 5) }).map((_, i) => 
        h('li', { style: 'color: teal;' }, `Reactive Dynamic Item Node #${i + 1}`)
      )
    )
  );
};

// Target document body container element
const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

// Spin up execution stack
const state = mountApp(appRoot, App, { count: 0 });
