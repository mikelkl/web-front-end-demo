var http = require('http');

http.createServer(function (req, res) {
    res.end('Hello');
}).listen(8011);