const fs = require('fs')

const tours  = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

exports.getAllTours = (req, res) => {
    res.json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
}

exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
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

exports.deleteTour = (req, res) => {
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