import createReducer from "./createReducer"

const initialState = {
    author: "",
    department: "",
    text: ""
}

export default createReducer(initialState)({
    "SET_CURRENT_QUOTE": (state, action) =>  {
        console.log(action)
        return ({...state, text: action.quote.text})
    }
})