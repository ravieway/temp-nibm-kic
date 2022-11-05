const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our first web page')
        return
    }
    if(req.url==='/about'){
        res.end('Here is our description')
        return
    }
    res.end(`
    <h1>Ooops !</h1>
    <p> Sorry, We can not find what you are looking for</p>
    <a href="/">Back to home</a>
    `)
})

server.listen(5000)