const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);