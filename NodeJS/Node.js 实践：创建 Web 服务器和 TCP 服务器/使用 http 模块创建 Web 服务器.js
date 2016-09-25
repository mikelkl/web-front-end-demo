var http = require('http');

var requestHandler = function (req, res) {
    res.end('hello');
};

var web = http.createServer(requestHandler);

web.listen(18000);

console.log('http server runs on http://localhost:18000');