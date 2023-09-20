// import http core global module
const http = require('http');

// ./ is local path, not global
const routes = require('./routes');

// createServer callback function stored in const server runs whenever request hits server, returns a response
// requestHandler method is imported from routes.js to this file and stored in routes constant (above)
// routes constant holds requesHandler function and it can be used here as a handler
// we are telling program to execute the function stored in routes for incoming requests
const server = http.createServer(routes);

// node js will keep server running to listen for incoming requests. in prod you remove 3000, that is local host for testing
server.listen(3000);