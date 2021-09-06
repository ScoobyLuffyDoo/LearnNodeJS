
console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io.log'; 

function MainLog(message){
    console.log('This is the  main Log : '+message);
}


module.exports =MainLog;