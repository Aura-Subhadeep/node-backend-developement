const fs = require('fs')
const express = require('express')

const app = express()

// Middleware

app.use(express.json())

const tours  = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

// Route Handlers

const getAllTours = (req, res) => {
    res.json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
}

const getTour = (req, res) => {
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: 'failed'
        })
    }
    res.json({
        status: 'success',
        tour
    })
}

const createTour = (req, res) => {
    const newId = tours[tours.length -1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)
    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.json({
            data: {
                tours: newTour
            }
        })
    })
}

const updateTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'failed'
        })
    }
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

const deleteTour = (req, res) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'failed'
        })
    }
    res.status(204).json({
        status: 'success',
        data: null
    })
}

const getAllusers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const createUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
}
// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)

// Tour routes
app.route('/api/v1/tours').get(getAllTours).post(createTour)

app.route('/api/v1/tours/:id').get(getTour).patch(updateTour).delete(deleteTour)

// User routes
app.route('/api/v1/users').get(getAllusers).post(createUsers)

app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)

// Server

const port = 8000
app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})