const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New req recd\n`;

  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    switch (req.url) {
      case '/':
        res.end('Hello from server');
        break;
      case '/about':
        res.end('I am Rahul Boney');
        break;
      case '/projects':
        res.end('My projects');
        break;
      default:
        res.end('404 not found');
    }
  });
});

myServer.listen(8000, '0.0.0.0', () => console.log('Server Started'));
