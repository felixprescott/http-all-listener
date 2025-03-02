"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const fs_1 = require("fs");
const logFilePath = 'incoming.log';
const server = (0, http_1.createServer)((req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}]\n${body}\n\n`;
        (0, fs_1.appendFileSync)(logFilePath, logMessage, { encoding: 'utf-8' });
        res.end('Body received');
    });
});
server.listen(8088, () => { });
