import { call, put, take } from "redux-saga/effects"

const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

export function* getRandomQuote() {
    while(true) {
        yield take("GET_RANDOM_QUOTE")
        let response = yield call(fetch, URL)
        let quote = yield response.json()
        quote = quote.message

        yield put({type: "SET_CURRENT_QUOTE", quote: {text: quote}})
    }
}