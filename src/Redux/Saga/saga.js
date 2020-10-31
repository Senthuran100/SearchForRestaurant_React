import { put, call, takeEvery } from 'redux-saga/effects'

import { SET_LOADING, GET_RESTAURANT, RESTAURANT_RES, GET_CITY,CITY_RES, COLLECTION_RES, GET_COLLECTION } from '../Actions/action'

import { getRestaurant,getCity,getCollection } from '../API/api'

function* getRestaurantDetail({ payload }) {
    yield put({ type: SET_LOADING })
    const restaurant = yield call(getRestaurant, payload)
    yield put({ type: RESTAURANT_RES, payload: restaurant })
}

function* getCityDetail({payload}){
    console.log(payload)
    const city = yield call(getCity, payload)
    yield put({ type: CITY_RES, payload: city })
}

function* getCollectionDetail({payload}){
    const collections = yield call(getCollection,payload)
    yield put({ type: COLLECTION_RES, payload: collections })
}

export default function* Saga() {
    yield takeEvery(GET_RESTAURANT, getRestaurantDetail)
    yield takeEvery(GET_CITY, getCityDetail)
    yield takeEvery(GET_COLLECTION,getCollectionDetail)
}