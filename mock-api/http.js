const http=require("http");

console.log("Starting the mocked api server...");
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    response.end('{"api":"ok"}\n');
}).listen(3001);