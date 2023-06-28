const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName === '/profile') {
        res.end('Here is your profile')
    } else if (pathName === '/page') {
        res.end('Heres your page')
    } else if (pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`, (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(data)
        })
    } else {
        res.end('server is running')
    }
})

server.listen(8000, () => {
    console.log('Listenig on port 8000');
})