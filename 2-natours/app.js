const fs = require('fs')
const express = require('express')

const app = express()

app.use(express.json())

const tours  = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

app.get('/api/v1/tours', (req, res) => {
    res.json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
})

app.get('/api/v1/tours/:id', (req, res) => {
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
})

app.post('/api/v1/tours', (req, res) => {
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
})

const port = 8000
app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})