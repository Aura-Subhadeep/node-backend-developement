const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello from the server side!')
})

const port = 8000

app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})
