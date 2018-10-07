export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'CHOOSE_COUNT':
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}
