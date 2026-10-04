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

app.listen(4000, () => console.log("http://localhost:4000"));