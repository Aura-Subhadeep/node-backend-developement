const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName === '/profile') {
        res.end('Here is your profile')
    } else if (pathName === '/page') {
        res.end('Heres your page')
    } else {
        res.end('The serever is serving from my pc')
    }
})

server.listen(8000, () => {
    console.log('Listenig on port 8000');
})