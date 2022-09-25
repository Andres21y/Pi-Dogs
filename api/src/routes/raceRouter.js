const { Router } =  require('express')
const {getInfo, getInfoId, createRace, upDate} = require('../routerControllers/raceControllers')
const router = Router()

router.get('/', getInfo)

router.get('/:id', getInfoId)

router.post('/', createRace)


 router.put('/:id', upDate)
// router.delete('/', createRace)



module.exports = router;

