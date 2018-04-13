import { select, take } from "redux-saga/effects"
import { constants as quotesConstants } from "../actions/quotes"

export function* getTrumpQuote() {
    let state = yield select()
    let trumpQuotes = state.trumpQuotes

    //The first time this function gets called there isn't
    //any trump quotes so need to wait for them to be fetched
    if (trumpQuotes.length === 0) {
        yield take(quotesConstants.FETCH_TRUMP_QUOTES_SUCCESS)
        state = yield select()
        trumpQuotes = state.trumpQuotes
    }

    let randomIndex = Math.floor(Math.random() * trumpQuotes.length)

    let message = trumpQuotes[randomIndex]

    let quote = {author: "Donald J. Trump", text: message, position: "President of the United States"}

    return quote
}