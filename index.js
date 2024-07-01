const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    if(req.url === '/login') {
        res.write(`
            <html>
                <head>
                    <title>Login Page</title>
                </head>
                <body>
                    <h1>Hello Login</h1>
                </body>
            </html>
        `);
    } else {
        res.write(`
            <html>
                <head>
                    <title>Node.js Class</title>
                </head>
                <body>
                    <h1>Hello World</h1>
                    <button onclick="window.location.href='/login'">Login</button>
                </body>
            </html>
        `);
    }
    
    res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}/`);
});