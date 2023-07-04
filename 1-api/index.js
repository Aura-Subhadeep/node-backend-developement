const fs = require('fs')
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`)
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName === '/profile') {
        res.end('Here is your profile')
    } else if (pathName === '/page') {
        res.end('Heres your page')
    } else if (pathName === '/api'){
        res.end(data)
    } else {
        res.end('server is running and its the root folder')
    }
})

server.listen(8000, () => {
    console.log('Listenig on port 8000');
})