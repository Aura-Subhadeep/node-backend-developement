const express = require('express')

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()

// Middleware
app.use(express.json())


// Mounted Routers
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

// Server

const port = 8000
app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})