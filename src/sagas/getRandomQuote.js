import { call, put, take } from "redux-saga/effects"
import { constants as quotesConstants, actions as quoteActions } from "../actions/quotes"

import { getAdministrationQuote } from "./getAdministrationQuote"
import { getTrumpQuote } from "./getTrumpQuote"

export function* getRandomQuote() {
    while(true) {
        yield take(quotesConstants.GET_RANDOM_QUOTE)
        
        let coinFlip = Math.floor(Math.random() * 2) % 2 === 0 ? "heads" : "tails"

        let quote = coinFlip === "heads" 
                            ? yield getAdministrationQuote()
                            : yield getTrumpQuote()

        yield put(quoteActions.setCurrentQuote(quote))
    }
}