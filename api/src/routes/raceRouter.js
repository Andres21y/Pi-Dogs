const router =  require('express').Router()
const {getInfo, getInfoId, createRace} = require('../routerControllers/raceControllers')

router.get('/', getInfo)

router.get('/:id', getInfoId)

router.post('/', createRace)


module.exports = router;

