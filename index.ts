import { createServer, IncomingMessage, ServerResponse } from 'http';
import { appendFileSync } from 'fs';

const logFilePath = 'incoming.log';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let body: string = '';

    req.on('data', (chunk: Buffer) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}]\n${body}\n\n`;

        appendFileSync(logFilePath, logMessage, { encoding: 'utf-8' });

        res.end('Body received');
    });
});

server.listen(8088, () => {});