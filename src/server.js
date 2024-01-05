const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const eventsRouter = require('./routers/events')
app.use('/events', eventsRouter) 

module.exports = app