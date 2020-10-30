import {RESTAURANT_RES, SET_LOADING, GET_RESTAURANT} from '../Actions/action'

const initialState = {
    loading:false,
    restaurant:[],
    Latitude: 0,
    Longitude: 0,
}

export default (state=initialState,{type,payload}) => {

 switch(type){
    case SET_LOADING:
        return {
          ...state,
      loading: true
        }   
    case RESTAURANT_RES:
         return {
             ...state,
             restaurant: payload,
             loading:false,
         }
    case GET_RESTAURANT:
        return {
            ...state,
            Latitude : payload.Latitude,
            Longitude: payload.Longitude,
        }
    default:
         return state
 }
 
}