// Bringing in the Logger Module
const log = require ('../../logger');
var LogMessage = "-- This is the Test Message --"
// Calling the Main Log Function
log(LogMessage)
console.log('#################')
log.SecondLog(LogMessage)
console.log('#################')
log.ThirdLog(LogMessage)
console.log('#################')
