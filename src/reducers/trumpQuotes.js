import createReducer from "./createReducer"

let initialState = []

export default createReducer(initialState)({
    "FETCH_TRUMP_QUOTES_SUCCESS": (state, action) => action.payload
})
