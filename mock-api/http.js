// FROM THIS TUTORIAL :
// https://ourcodeworld.com/articles/read/260/creating-your-first-self-implemented-basic-http-server-with-routing-in-node-js
//**************************************************************************************************************************

// require the http module of node.js
const http = require('http');
const url = require('url');
// require the dispatcher module
const httpDispatcher = require('httpdispatcher');
const dispatcher = new httpDispatcher();


// define the port of access for your server
const PORT = 3001;

// We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        // log the request on console
        console.log(request.url);
        // Dispatch
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

// Create a server
const myFirstServer = http.createServer(handleRequest);

// add some routes

//A sample GET request
dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"mocked-api":"ok"}');
});

dispatcher.onGet("/election/create/", function(req, res) {
    var url_parts = url.parse(req.url, true);
    var name = url_parts.query.name;
    if(name){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('{"data":{"type":"election","attributes":{"electionId": "fer545,b,8kl784h87zdfs97","ownerToken": "fe78ht485df05fh4f85d4sd;084erg"}}}');
    }else{
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end('{"status": 400,"title": "Must either be permissive or have an owner mail","detail": "Please provide an email address or let the election be permissive."}');
    }

});

dispatcher.onError(function(req, res) {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end('{"status": 404,"title": "Page not found","detail": "Please check your URL."}');
});

// Start the server !
myFirstServer.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Mocked API listening on: http://localhost:%s", PORT);
});