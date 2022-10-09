const { Router } =  require('express')
const {getInfo, getInfoId, createRace} = require('../routerControllers/raceControllers')
const router = Router()

router.get('/', getInfo)

router.get('/:id', getInfoId)

router.post('/', createRace)


module.exports = router;

