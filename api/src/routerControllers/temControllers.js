const {Temperament} = require('../db')
const { default: axios } = require('axios');
const { API_BREEDS } = process.env;

const getTemp = async (req, res, next)=>{
    try {
        let apiInfo = await axios.get(`${API_BREEDS}`)
        let result = await apiInfo.data.map(e=>e.temperament).toString().split(',')
        let data = await result.map(e => e.trim())

        await data.map(e=>{
            Temperament.findOrCreate({
                where:{
                    name:e
                }
            })
        })
        let temps = await Temperament.findAll()
        res.send(temps)
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getTemp
}