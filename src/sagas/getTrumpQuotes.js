import { call, put } from "redux-saga/effects"

const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/"

export function* getTrumpQuotes() {
    let response = yield call(fetch, URL)
    let quotes = yield response.json()

    quotes = quotes.messages.non_personalized

    yield put({type: "FETCH_TRUMP_QUOTES_SUCCESS", payload: quotes})
}
