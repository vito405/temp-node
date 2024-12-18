//os module
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

//
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOs)