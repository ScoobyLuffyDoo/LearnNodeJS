
var http  = require('http');
var server = http.createServer((req,res) => {
    console.log('Request was made ' +req.url)
    res.writeHead(200,{contentType: 'application/json'}),
    res.end('{"name":"John", "age":30, "car":null}');
});

server.listen(3000,'localhost')
console.log('listening on http://localhost:3000')