const axios = require('axios')
const { Breed, Temperament } = require('./db')
const { API_BREEDS } = process.env;



//console.log(`${API_BREEDS }?api_key=${API_KEY}`);

const apiInfo = async () => {
    try {
        let apiUrl = await axios.get(`${API_BREEDS}`)
        let data = await apiUrl.data.map(e => {

            let w_Min = Number(e.weight.metric.split('-')[0] > e.weight.metric.split('-')[1] ? e.weight.metric.split('-')[0] : e.weight.metric.split('-')[1])
            let w_Max = Number(e.weight.metric.split('-')[0] < e.weight.metric.split('-')[1] ? e.weight.metric.split('-')[0] : e.weight.metric.split('-')[1])
            let h_Min = Number(e.height.metric.split('-')[0] > e.height.metric.split('-')[1] ? e.height.metric.split('-')[0] : e.height.metric.split('-')[1])
            let h_Max = Number(e.height.metric.split('-')[0] < e.height.metric.split('-')[1] ? e.height.metric.split('-')[0] : e.height.metric.split('-')[1])

            return {
                id: e.id,
                name: e.name,
                image: e.image.url,
                min_Weight: !w_Min ? w_Min = 0 : w_Min,
                max_Weight: !w_Max ? w_Max = 0 : w_Max,
                life_span: e.life_span,
                min_Height: h_Min,
                max_Height: h_Max,
                temperaments: !e.temperament ? null : (e.temperament.split(","))
            }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}


const dbInfo = async () => {
    try {
        const data = await Breed.findAll({
            include: {
                model: Temperament,
                attributes: ['name'],
                throught: {
                    attributes: []
                }
            }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}



const allInfo = async () => {
    try {
        let api = await apiInfo()
        let db = await dbInfo()

        if (api) {
            return [...db, ...api]
        }else{

            return db
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    allInfo
}