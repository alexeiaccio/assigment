const modal = (state = false, action) => {
  if (action.type === 'TOGGLE_MODAL') {
    return !state
  }
  return state
}

export default modal