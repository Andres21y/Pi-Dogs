import axios from 'axios'
export const GET_BREEDS = 'GET_BREEDS';
export const GET_BREEDS_NAME = 'GET_BREEDS_NAME';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_DETAILS = 'GET_DETAILS';
export const FILTER_TEMP = 'FILTER_TEMP';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const ORDER_BY_BREEDS = 'ORDER_BY_BREEDS';
export const SET_STATE = 'SET_STATE';


export const getBreeds = () => {
    return async function (dispatch) {
        try {
            let info = await axios.get('/api/dogs')
            return dispatch({
                type: GET_BREEDS,
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const resetDetail = () => {
            return ({
                type: GET_DETAILS,
                payload:{}
            })
}

export const getBreedsName = (name) => {
    return async function (dispatch) {
        try {
            let info = await axios.get(`/api/dogs/?name=${name}`)
            return dispatch({
                type: GET_BREEDS,
                payload: info.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setState = (payload) => {
    return async function (dispatch) {
        try {
            return dispatch({
                type: SET_STATE,
                payload
            })
        } catch (error) {
            console.log(error)
        }
    }
}
  
export const getTemperaments = () => {
    return async function (dispatch) {
        try {
            let info = await axios.get(`/api/temperaments`)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: info.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const postBreed = (payload) => {
    return async function (dispatch) {
        try {
         await axios.post(`/api/dogs`, payload) 
         return dispatch({
            type:'',
            payload
         })
        } catch (error) {
            
        }
    }
}

export const getDetails = (id) => {
    return async function (dispatch) {
        try {
            let info = await axios.get(`/api/dogs/${id}`)
            return dispatch({
                type: GET_DETAILS,
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterTemperament = (payload) => {
    return async function (dispatch){
        return dispatch({
            type: FILTER_TEMP,
            payload
        })
    }
}

export function orderName(payload){
    return{
        type:ORDER_BY_NAME,
        payload
    }
}

export function orderWeight(payload){
    return{
        type:ORDER_BY_WEIGHT,
        payload
    }
}

export function orderBreeds(payload){
    return{
        type:ORDER_BY_BREEDS,
        payload
    }
}