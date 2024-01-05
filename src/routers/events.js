const express = require('express');
const router = express.Router()
const app = express()

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

router.get('/', (req, res) => {
  return res.json({ events });
})

router.get('/:id', (req, res) => {
  const eventId = Number(req.params.id)

  const foundEvent = events.find((event) => event.id === eventId)

  if (!foundEvent) {
    res.status(404).json({error: `No such event with ID: ${eventId}`})
  }
  
  return res.json({ event })
})

module.exports = router;
