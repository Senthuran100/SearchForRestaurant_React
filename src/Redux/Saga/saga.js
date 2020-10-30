import { put, call, takeEvery } from 'redux-saga/effects'

import {SET_LOADING,GET_RESTAURANT,RESTAURANT_RES} from '../Actions/action'

import {getRestaurant} from '../API/api'

function *getRestaurantDetail({payload}){
    yield put({ type: SET_LOADING })
    const restaurant = yield call(getRestaurant,payload)
    yield put({type:RESTAURANT_RES,payload:restaurant})
}

export default function* Saga() {
    yield takeEvery(GET_RESTAURANT,getRestaurantDetail)
}