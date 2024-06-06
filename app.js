const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URL)

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL);
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Error connecting to MongoDB:', error.message);
    }
};
  
connectToDatabase();

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app