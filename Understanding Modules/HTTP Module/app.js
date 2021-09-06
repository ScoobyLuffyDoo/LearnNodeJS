const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
     res.write('Hello World');
     res.end();
    }

    if(req.url === '/cars/brands'){
        res.write(JSON.stringify(['Toyota','Audi','Nissan']));
        res.end();
    }

    // else{
    // res.write('Invalid Page');
    //  res.end();
    // }

});
server.listen(3010);




// server.on('connection',(socket) => {
//     console.log('New Connection established');
// })

console.log('Listening on Port 3010')