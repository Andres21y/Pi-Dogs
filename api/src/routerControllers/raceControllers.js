const { Breed, Temperament } = require('../db')
const { Sequelize } = require('sequelize')
const { allInfo } = require('../genarator')



const getInfo = async (req, res, next) => {
    const { name } = req.query
    //console.log('name',name);
    const allDogs = await allInfo()
    try {
        if (!name) {
            res.send(allDogs)
        } else {
            let allRaces = allDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            allRaces.length > 0 ? res.send(allRaces) : res.json({ message: 'no dogs to show' })
        }
    } catch (error) {
        next(error);
    }
}


const getInfoId = async (req, res, next) => {
    const { id } = req.params
    //console.log('-___>',id);
    //console.log('d',id);
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
    const { name, min_Height,
        max_Height, min_Weight,
        max_Weight, life_span_max,
        life_span_min, temperament } = req.body
    console.log('===>body', req.body);
    try {
        if (!name || !min_Height || !max_Height || !min_Weight || !max_Weight || !life_span_max || !life_span_min) {
            res.json({ message: 'please missing information is require' })
        } else {
            let verify = await Breed.findOne({
                where: {
                    name: { [Sequelize.Op.iLike]: '%${name}%' }
                }
            })

            if (verify) {
                res.json({ message: 'this dog has alredy been create' })
            } else {

                const newBreed = await Breed.create({
                    name,
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
                res.send('Procces sussesful')
            }
        }
    } catch (error) {
        next(error)
    }

}


const upDate = async (req, res, next) => {
    const { id } = req.params

    try {
        const Dogs = Breed.findOne({
            where: { id }
        })

        Dogs.upDate(req.body)

        return res.json(Dogs)
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getInfo,
    createRace,
    getInfoId,
    upDate

}