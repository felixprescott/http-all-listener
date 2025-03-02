"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var server = (0, http_1.createServer)(function (req, res) {
    var body = '';
    req.on('data', function (chunk) {
        body += chunk.toString();
    });
    req.on('end', function () {
        console.log('Received body:', body);
        res.end('Body received');
    });
});
server.listen(8088, function () {
    console.log('Server is listening on port 8088');
});
