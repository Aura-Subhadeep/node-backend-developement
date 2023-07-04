const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from the server side!')
})

app.post('/', (req, res) => {
    res.send('You can post now')
})

const port = 8000

app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})
