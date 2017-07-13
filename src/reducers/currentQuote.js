import createReducer from "./createReducer"

const initialState = {
    author: "",
    department: "",
    text: ""
}

export default createReducer(initialState)({
    "SET_CURRENT_QUOTE": (state, action) =>  action.quote
})