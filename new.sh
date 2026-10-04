#!/bin/sh
echo "--- REST: ticket (owner is only an id)"; curl -s localhost:4000/rest/tickets/1; echo
echo "--- REST: second call for the owner";    curl -s localhost:4000/rest/users/1; echo
echo "--- REST: update";  curl -s -X PATCH localhost:4000/rest/tickets/1 -H 'Content-Type: application/json' -d '{"status":"in_progress"}'; echo
echo "--- GraphQL: one call, only the fields I ask for, owner included"
curl -s localhost:4000/graphql -H 'Content-Type: application/json' -d '{"query":"{ ticket(id: 1) { title owner { name } } }"}'; echo
echo "--- GraphQL: same URL, mutation"
curl -s localhost:4000/graphql -H 'Content-Type: application/json' -d '{"query":"mutation { resolveTicket(id: 2) { title status } }"}'; echo
echo "--- SOAP: XML in, XML out"
curl -s localhost:4000/soap -H 'Content-Type: text/xml' -d '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><GetTicket><id>1</id></GetTicket></soap:Body></soap:Envelope>'; echo