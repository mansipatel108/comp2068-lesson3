///<referance path ="_referance.ts" /> 
var express = require('express');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res) {
    res.send('Hello Express!');
});
//Route for info page
app.get('/info', function (req, res, next) {
    res.send('Your custom Info page goes here');
});
app.listen(port, function () {
    console.log("App started on port:" + port);
});
/*

import http = require('http');

var port:number = process.env.port || 3000;

var server:http.Server = http.createServer(
   function(req:http.ServerRequest, res:http.ServerResponse) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("hello node!!");
   });
   

server.listen(port,function(){
    console.log("Server started listening on port:" + port);
});


*/ 
//# sourceMappingURL=server.js.map