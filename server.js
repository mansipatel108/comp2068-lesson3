///<referance path ="_referance.ts" /> 
var http = require('http');
var port = process.env.port || 3000;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("hello node!!");
});
server.listen(port, function () {
    console.log("Server started listening on port:" + port);
});
//# sourceMappingURL=server.js.map