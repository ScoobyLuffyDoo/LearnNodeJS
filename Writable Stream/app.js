// Desc  this basically breaks the data that is being read/ retrieved into blocks
// that then can be used while the rest of the data gets retrieved 

var http  = require('http');
var fs = require('fs');
var sleep = require('sleep');
var x = 0
var time=0;

// Creating a readable stream
var readableStream = fs.createReadStream(__dirname +'/ReadFile.txt', 'utf8');
var WritableStream = fs.createWriteStream(__dirname +'/WriteFile.txt',);

// create a listener
readableStream.on('data', (chunk) => {
    console.log('Fetched Block : '+ (x= x+1));
    sleep.sleep(2);
    // console.log(chunk);
    WritableStream.write(chunk)
    console.log('Data Written')
});

