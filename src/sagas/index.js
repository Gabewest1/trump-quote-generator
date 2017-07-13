import { all } from "redux-saga/effects"
import { getRandomQuote } from "./getRandomQuote"

export default function* rootSaga() {
    yield all([
        getRandomQuote(),
    ])
}