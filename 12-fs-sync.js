//synchronous approach

const {readFileSync, writeFileSync, write} = require('fs')
console.log('Start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


writeFileSync(
    './content/result_sync.txt',
    `Result: ${first}, ${second}`,
    {flag:'a'}
)

console.log('Completed')
console.log('Starting the next')
