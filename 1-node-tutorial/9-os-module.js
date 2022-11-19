const { log } = require('console')
const os =require('os')

//info about current user

const user = os.userInfo()
console.log(user)


//write a method to print system up time

console.log(`The system Uptime is ${os.uptime()} seconds`)



const systemInfo={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(systemInfo)

