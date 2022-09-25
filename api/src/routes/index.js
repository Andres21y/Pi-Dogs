const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const breedRouter = require('./raceRouter')
const temRouter = require('./temRouter')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', breedRouter)
router.use('/temperaments', temRouter)

module.exports = router;
