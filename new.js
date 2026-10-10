// Same data, three API styles. Run: npm install && node server.js
const express = require("express");
const { buildSchema, graphql } = require("graphql");

const users = [{ id: 1, name: "Asha", email: "asha@college.edu" }];
const tickets = [
  { id: 1, title: "Wifi down", status: "open", userId: 1 },
  { id: 2, title: "Projector broken", status: "open", userId: 1 },
];

const app = express();
app.use(express.json());

/* ---------- 1. REST: many URLs (resources), HTTP method = action ---------- */
app.get("/rest/tickets/:id", (req, res) => {
  const t = tickets.find(t => t.id == req.params.id);
  t ? res.json(t) : res.status(404).json({ error: "not found" }); // fixed shape: you get what the server decided
});
app.get("/rest/users/:id", (req, res) => {
  const u = users.find(u => u.id == req.params.id);
  u ? res.json(u) : res.status(404).json({ error: "not found" });
});
app.patch("/rest/tickets/:id", (req, res) => {
  const t = tickets.find(t => t.id == req.params.id);
  if (!t) return res.status(404).json({ error: "not found" });
  t.status = req.body.status;
  res.json(t);
});

/* ---------- 2. GraphQL: ONE URL, the client describes the exact data it wants ---------- */
const schema = buildSchema(`
  type User   { id: ID!  name: String!  email: String! }
  type Ticket { id: ID!  title: String!  status: String!  owner: User }
  type Query    { ticket(id: ID!): Ticket   tickets: [Ticket!]! }
  type Mutation { resolveTicket(id: ID!): Ticket }
`);
const withOwner = t => t && { ...t, owner: users.find(u => u.id === t.userId) };
const resolvers = {
  ticket: ({ id }) => withOwner(tickets.find(t => t.id == id)),
  tickets: () => tickets.map(withOwner),
  resolveTicket: ({ id }) => {
    const t = tickets.find(t => t.id == id);
    if (t) t.status = "resolved";
    return withOwner(t);
  },
};
app.post("/graphql", async (req, res) =>
  res.json(await graphql({ schema, source: req.body.query, variableValues: req.body.variables, rootValue: resolvers }))
);

/* ---------- 3. SOAP: ONE URL, always POST, XML envelope, strict contract (WSDL) ----------
   Real projects use a library plus a WSDL file. This hand-written version shows what travels on the wire. */
app.post("/soap", express.text({ type: ["text/xml", "application/soap+xml"] }), (req, res) => {
  const xml = req.body;
  const wrap = body => `<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>${body}</soap:Body></soap:Envelope>`;
  res.type("text/xml");
  if (xml.includes("<GetTicket")) {
    const id = (xml.match(/<id>(\d+)<\/id>/) || [])[1];
    const t = tickets.find(t => t.id == id);
    if (t) return res.send(wrap(`<GetTicketResponse><title>${t.title}</title><status>${t.status}</status></GetTicketResponse>`));
  }
  res.status(500).send(wrap(`<soap:Fault><faultcode>soap:Client</faultcode><faultstring>Unknown operation or ticket</faultstring></soap:Fault>`));
});

// app.listen(4000, () => console.log("http://localhost:4000"));


// 1. Custom Error Class for Backend API
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// 2. Asynchronous Generator for Streaming Large Datasets from a DB
async function* fetchLargeDataset(dbCursor, batchSize = 100) {
  let batch = [];
  for await (const doc of dbCursor) {
    batch.push(doc);
    if (batch.length >= batchSize) {
      yield batch;
      batch = [];
    }
  }
  if (batch.length > 0) {
    yield batch;
  }
}

// 3. Higher-Order Function / Closure for Rate Limiting Middleware
const createRateLimiter = (limit = 100, windowMs = 15 * 60 * 1000) => {
  const requests = new Map();

  return (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;
    const currentTime = Date.now();
    const windowStart = currentTime - windowMs;

    // Clean up old timestamps
    const userRequests = (requests.get(ip) || []).filter(timestamp => timestamp > windowStart);
    
    if (userRequests.length >= limit) {
      return next(new AppError('Too many requests, please try again later.', 429));
    }

    userRequests.push(currentTime);
    requests.set(ip, userRequests);
    next();
  };
};

// Export modules for backend use
module.exports = {
  AppError,
  fetchLargeDataset,
  createRateLimiter
};



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

  const $el = document.createElement(vnode.tag);

  // Set structural element attributes
  for (const [key, value] of Object.entries(vnode.props)) {
    if (key.startsWith('on') && typeof value === 'function') {
      $el.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      $el.setAttribute(key, value);
    }
  }

  // Recursively append children
  for (const child of vnode.children) {
    $el.appendChild(createRealDOMNode(child));
  }

  return $el;
}

// ==========================================
// 3. THE DIFFING AND PATCH ENGINE
// ==========================================
function diff(oldVNode, newVNode) {
  // Case 1: Old node doesn't exist, append new node
  if (oldVNode === undefined) {
    return ((parent) => {parent.appendChild(createRealDOMNode(newVNode));
      return $parent.lastChild;
    });
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
      const newElement = createRealDOMNode(newVNode);
      parent.replaceChild(newElement, currentElement);
      return $newElement;
    };
  }

  // Case 4: Node type tags differ completely (e.g., <div> changed to <section>)
  if (oldVNode.tag !== newVNode.tag) {
    return (parent, currentElement) => {
      const newElement = createRealDOMNode(newVNode)
      ;parent.replaceChild(newElement, currentElement);
      return $newElement;
    };
  }

  // Case 5: Same element tag, reconcile attributes and children
  return (parent, currentElement) => {
    // 5a. Patch properties/attributes
    const oldProps = oldVNode.props || {};
    const newProps = newVNode.props || {};

    for (const [key, val] of Object.entries(newProps)) {
      if (val !== oldProps[key]) {
        if (!key.startsWith('on')) $currentElement.setAttribute(key, val);
      }
    }
    for (const key of Object.keys(oldProps)) {
      if (!(key in newProps)) $currentElement.removeAttribute(key);
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
        $currentElement.appendChild(createRealDOMNode(newChildren[i]));
      }
    }

    // Remove obsolete old elements
    if (oldChildren.length > newChildren.length) {
      for (let i = oldChildren.length - 1; i >= commonLength; i--) {
        currentElement.removeChild(currentElement.childNodes[i]);
      }
    }

    return $currentElement;
  };
}

// ==========================================
// 4. BATCHED RENDERING APPLICATION MOUNT
// ==========================================
function mountApp(rootElement, appComponent, initialState) {
  let oldVNode = null;
  let $root = rootElement;
  let isScheduled = false;

  // The rendering pipeline
  const updatePipeline = () => {
    activeEffect = updatePipeline; 
    const newVNode = appComponent(store.state);
    
    if (!oldVNode) {
      // First structural insertion
      $root.appendChild(createRealDOMNode(newVNode));
      root = root.lastChild;
    } else {
      // Delta rendering calculation via diff patches
      const patch = diff(oldVNode, newVNode);
      $root = patch(root.parentNode, root);
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
