const { Breed, Temperament } = require('../db')
const { Sequelize, Model } = require('sequelize')
const { allInfo } = require('../genarator')



const getInfo = async (req, res, next) => {
    const { name } = req.query
    const allDogs = await allInfo()
    try {
        if (!name) {
            res.send(allDogs).status(200)
        } else {
            let allRaces = allDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            allRaces.length > 0 ? res.send(allRaces).status(200) : res.status(200)
        }
    } catch (error) {
        next(error);
    }
}


const getInfoId = async (req, res, next) => {
    const { id } = req.params
    try {
        const allDogs = await allInfo()
        if (!id) {
            res.json({ message: 'this breed of dog was not found or has not been created' })
        } else {
            if (id) {
                let dog = await allDogs.find(e => e.id === Number(id))
                dog && res.send(dog).json({ message: 'vengo de api' })

            }
            if (!Number(id)) {
                let dog = await Breed.findByPk(id, {
                    include: [{ model: Temperament }]
                })
                res.send(dog)
            }
            res.send('ok')
        }

    } catch (error) {
        next(error)

    }
}

const createRace = async (req, res, next) => {
    const { name, min_Height, max_Height,
        min_Weight, max_Weight, life_span_max,
        life_span_min, temperament
    } = req.body

    try {
        if (!name || !min_Height || !max_Height || !min_Weight || !max_Weight || !life_span_max || !life_span_min) {
            res.json({ message: 'please missing information is require' })
        } else {
            let verify = await Breed.findOne({
                where: {
                    name: { [Sequelize.Op.iLike]: `%${name}%` }
                }
            })

            if (verify) {
                res.json({ message: 'this dog has alredy been create' })
            } else {

                const newBreed = await Breed.create({
                    name: name,
                    min_Height: Number(min_Height),
                    max_Height: Number(max_Height),
                    min_Weight: Number(min_Weight),
                    max_Weight: Number(max_Weight),
                    life_span_min: Number(life_span_min),
                    life_span_max: Number(life_span_max),
                })
                const temp = await Temperament.findAll({
                    where: {
                        name: temperament
                    }
                })
                newBreed.addTemperament(temp)
                res.json({ message: 'successful process' })
            }
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {
    getInfo,
    createRace,
    getInfoId,
}