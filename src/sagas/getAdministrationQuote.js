import { call, put, take } from "redux-saga/effects"
import { constants as quotesConstants } from "../actions/quotes"

const URL = "admin.json"

export function* getAdministrationQuote() {
        let response = yield call(fetch, URL)
        let { quotes } = yield response.json()

        let random = Math.floor(Math.random() * quotes.length)
        console.log(quotes.length)

        return quotes[random]
}