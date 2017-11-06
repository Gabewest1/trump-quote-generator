import createReducer from "./createReducer"

const initialState = {
    author: "",
    position: "",
    text: ""
}

export default createReducer(initialState)({
    "SET_CURRENT_QUOTE": (state, action) =>  action.quote
})