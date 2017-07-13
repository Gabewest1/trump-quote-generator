import { call, put, take } from "redux-saga/effects"
import { constants as quotesConstants } from "../actions/quotes"

const URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"

export function* getTrumpQuote() {
    let response = yield call(fetch, URL)
    let { message } = yield response.json()

    let quote = {author: "Donald J. Trump", text: message, position: "President of the United State"}

    return quote
}