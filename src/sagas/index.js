import { all } from "redux-saga/effects"
import { getRandomQuote } from "./getRandomQuote"
import { shareQuote } from "./shareQuote"

export default function* rootSaga() {
    yield all([
        getRandomQuote(),
        shareQuote(),
    ])
}