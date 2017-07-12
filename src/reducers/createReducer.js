export default (initialState) => (actionHandlers) => (state = initialState, action) => {
    let reducer = actionHandlers[action.type]
    return reducer ? reducer(state, action) : state
}