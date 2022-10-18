const router = require('express').Router();

const breedRouter = require('./raceRouter')
const temRouter = require('./temRouter')

router
    .use('/dogs', breedRouter)
    .use('/temperaments', temRouter)

module.exports = router;
