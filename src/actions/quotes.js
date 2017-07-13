const SET_CURRENT_QUOTE = "SET_CURRENT_QUOTE"
const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE"
const GET_ADMIN_QUOTE = "GET_ADMIN_QUOTE"
const GET_TRUMP_QUOTE = "GET_TRUMP_QUOTE"

const fetchRandomQuote = () => ({ type: GET_RANDOM_QUOTE })
const fetchAdministrationQuote = () => ({ type: GET_ADMIN_QUOTE })
const fetchTrumpQuote = () => ({ type: GET_TRUMP_QUOTE })
const setCurrentQuote = (quote) => ({ type: SET_CURRENT_QUOTE, quote })

export const actions = {
    fetchRandomQuote,
    setCurrentQuote,
    fetchAdministrationQuote,
    fetchTrumpQuote,
}

export const constants = {
    SET_CURRENT_QUOTE,
    GET_RANDOM_QUOTE,
    GET_ADMIN_QUOTE,
    GET_TRUMP_QUOTE,
}