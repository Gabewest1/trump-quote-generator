import { delay } from "redux-saga"
import { call, put } from "redux-saga/effects"

const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

export function* getRandomQuote() {
    let response = yield call(fetch, URL)
    let quote = yield response.json()
    quote = quote.message

    yield put({type: "SET_CURRENT_QUOTE", quote: {text: quote}})
}