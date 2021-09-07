var fs = require('fs');
var time=0;

fs.readFile('FileRead.txt','utf8',function(err, data){
    console.log('File Read');
    fs.writeFile('WriteFile.txt',data);
    console.log('File Written');
});

// setInterval(() => {
//     time +=2
//     console.log('Test');
// }, 100);


// fs.readFile('FileRead.txt','utf-8',(err, data) => {
//     console.log(data)
// })


// WriteFile(ReadMeFile)
// var ReadWritten = fs.readFileSync('WriteMe.txt','utf-8',)
//var ReadMeFile = fs.readFileSync('FileRead.txt','utf-8',)
