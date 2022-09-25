const { Router } =  require('express')
const {getTemp} = require('../routerControllers/temControllers')
const router = Router()

router.get('/', getTemp)

module.exports = router;