const {readFile,writeFile}= require('fs')
const util=require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async ()=>{
    try{
        const first = await readFilePromise('./content/first.txt','utf8')
        const second = await readFilePromise('./content/second.txt','utf8')
        await writeFilePromise(
            './content/result-promise-trick.txt', 
            `This is awesome: ${first} ${second}`
        )
        console.log(first)
        console.log(second)
    }catch(error){
        console.log(error)
    }
}

start()