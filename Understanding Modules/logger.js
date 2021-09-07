var url = 'http://mylogger.io.log';


function MainLog(message){
    console.log('This is the  main Log : '+message);
}

function log(message) {
    //send http request
    console.log('This is the Second Logger : '+message)
}


function loger(message) {
    //send http request
    console.log('This is the Third Message : '+message)
}

module.exports =MainLog;
module.exports.SecondLog = log;
module.exports.ThirdLog = loger;

// module.exports.Endpoint = url