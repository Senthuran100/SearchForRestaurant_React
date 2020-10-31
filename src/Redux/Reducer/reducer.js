import { RESTAURANT_RES, SET_LOADING, GET_RESTAURANT, GET_CITY, CITY_RES, GET_COLLECTION, COLLECTION_RES } from '../Actions/action'

const initialState = {
    loading: false,
    restaurant: [],
    Latitude: 0,
    Longitude: 0,
    city: [],
    collections: []
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case RESTAURANT_RES:
            return {
                ...state,
                restaurant: payload,
                loading: false,
            }
        case GET_RESTAURANT:
            return {
                ...state,
                Latitude: payload.Latitude,
                Longitude: payload.Longitude,
            }
        case GET_CITY:
            return {
                ...state,
                Latitude: payload.Latitude,
                Longitude: payload.Longitude,
            }
        case CITY_RES:
            return {
                ...state,
                city: payload
            }
        case GET_COLLECTION:
            return {
                ...state,
                Latitude: payload.Latitude,
                Longitude: payload.Longitude,
            }
        case COLLECTION_RES:
            return{
                ...state,
                collections: payload
            }
        default:
            return state
    }

}