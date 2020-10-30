import { spawn } from 'redux-saga/effects'

import Saga from './saga'

export default function* rootSaga() {
    console.log("Hello From Redux-Saga!")
    yield spawn(Saga)
  }