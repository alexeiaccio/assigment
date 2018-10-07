const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS':
      const nextState = { ...state }
      action.response.forEach(news => {
        nextState[news.id] = news
      })
      return nextState
    default:
      return state
  }
}

export default byId

export const getNews = (state, id) => state[id]
