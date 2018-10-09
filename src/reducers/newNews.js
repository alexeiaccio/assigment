const newNews = (state = {}, action) => {
  if (action.type === 'UPDATE_NEW_NEWS') {
    if (action.payload) {
      return action.payload
    } else {
      return {}
    }
  }
  return state
}

export default newNews
