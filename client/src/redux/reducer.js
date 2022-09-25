import {
    GET_BREEDS,
    GET_BREEDS_NAME,
    GET_TEMPERAMENTS,
    GET_DETAILS,
    FILTER_TEMP,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT,
    ORDER_BY_BREEDS
} from './actions'

const initialState = {
    allBreeds: [],
    details: {},
    stateBreeds: [],
    temperament: []
}

export default function rootReducer(state = initialState, action) {
    console.log('type and payload__>', action);

    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                allBreeds: action.payload,
                stateBreeds: action.payload
            }
        case GET_BREEDS_NAME:
            return {
                ...state,
                allBreeds: action.payload,
                stateBreeds: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperament: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case ORDER_BY_NAME:
            const sort = action.payload === 'ascending' ?
                state.allBreeds.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    return 0
                }) :
                state.allBreeds.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                    return 0
                })
            return {
                ...state,
                stateBreeds: sort
            }
        case ORDER_BY_WEIGHT:
            const sortWeight = action.payload === 'max' ?
                state.allBreeds.sort(function (a, b) {
                    if (parseInt(a.max_Weight) > parseInt(b.max_Weight)) return -1;
                    if (parseInt(a.max_Weight) < parseInt(b.max_Weight)) return 1;
                    return 0
                })
                :
                state.allBreeds.sort(function (a, b) {
                    if (parseInt(a.min_Weight) > parseInt(b.min_Weight)) return 1;
                    if (parseInt(a.min_Weight) < parseInt(b.min_Weight)) return -1;
                    return 0
                })
            return {
                ...state,
                allBreeds: sortWeight
            }
        case ORDER_BY_BREEDS:
            let filtBreed = state.allBreeds;
            let origin = action.payload === 'all' ? filtBreed :
                action.payload === 'created' ? filtBreed.filter(element => element.created)
                    :
                    filtBreed.filter(ele => !ele.created)
            return {
                ...state,
                stateBreeds: origin
            }

        case FILTER_TEMP:
            let statebr = state.allBreeds;

            let infoDb = statebr.filter(e => {
                if (e.hasOwnProperty('created')) {
                    let temper = e.temperaments.map(e => e.name)
                    return temper.includes(action.payload); //devolver e para despues corregir

                }
            })

            let infoApi = statebr.filter(e => e.temperaments !== null && e.temperaments.includes(` ${action.payload}`) === true && e || e.temperaments !== null && e.temperaments.includes(action.payload) === true && e)

            const data = [...infoApi, ...infoDb]

            return {
                ...state,
                stateBreeds: data
            }

        default:
            return state;
    }
}