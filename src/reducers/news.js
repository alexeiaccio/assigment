const news = (state = [], action) => {
  if (action.response) {
    return action.response
  }
  return state
}

export default news

export const getNews = (state, id) => state[id]
