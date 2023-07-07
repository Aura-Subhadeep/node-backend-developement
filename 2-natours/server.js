const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB connection successfull'))

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: true
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: 'Avatar',
    rating: 4.8,
    price: 787
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log('Error')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})