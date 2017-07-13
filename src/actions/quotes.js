const SET_CURRENT_QUOTE = "SET_CURRENT_QUOTE"
const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE"

const fetchRandomQuote = () => ({ type: GET_RANDOM_QUOTE })
const setCurrentQuote = (quote) => ({ type: SET_CURRENT_QUOTE, quote })

export const actions = {
    fetchRandomQuote,
    setCurrentQuote,
}

export const constants = {
    SET_CURRENT_QUOTE,
    GET_RANDOM_QUOTE,
}