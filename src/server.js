const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

let currentEventId = 2
const events = [{
  id: 1,
  title: 'John Leaving Do',
  startDate: '02/04/2024',
  endDate: '02/04/2024'
}, {
  id: 2,
  title: 'Jane\'s Surprise Birthday Trip',
  startDate: '03/05/2024',
  endDate: '04/05/2024'
}]

app.get('/events', (req, res) => {
  return res.json({ events });
})

app.get('/events/:id', (req, res) => {
  const eventId = Number(req.params.id)

  const foundEvent = events.find((event) => event.id === eventId)

  if (!foundEvent) {
    res.status(404).json({error: `No such event with ID: ${eventId}`})
  }
  
  return res.json({ event })
})