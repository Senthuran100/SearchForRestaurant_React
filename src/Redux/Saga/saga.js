import { put, call, takeEvery } from 'redux-saga/effects'

import {SET_LOADING,GET_RESTAURANT,RESTAURANT_RES} from '../Actions/action'

import {getRestaurant} from '../API/api'

function *getRestaurantDetail({payload}){
    yield put({ type: SET_LOADING })
    console.log('Hello',payload);
    const restaurant = yield call(getRestaurant,payload)
    console.log(restaurant);
    console.log('HIII');
    yield put({type:RESTAURANT_RES,payload:restaurant})
}

export default function* Saga() {
    yield takeEvery(GET_RESTAURANT,getRestaurantDetail)
}