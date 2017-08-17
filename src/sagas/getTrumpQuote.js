import { select } from "redux-saga/effects"
import { constants as quotesConstants } from "../actions/quotes"

export function* getTrumpQuote() {
    let state = yield select()
    let trumpQuotes = state.trumpQuotes
    let randomIndex = Math.floor(Math.random() * trumpQuotes.length)

    let message = trumpQuotes[randomIndex]

    let quote = {author: "Donald J. Trump", text: message, position: "President of the United States"}

    return quote
}