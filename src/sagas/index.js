import { all } from "redux-saga/effects"
import { getRandomQuote } from "./whatTrumpThinks"

export default function* rootSaga() {
    yield all([
        getRandomQuote()
    ])
}