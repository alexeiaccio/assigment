import { combineReducers } from 'redux'

const createList = filter => {
  const ids = (state = [], action) => {
    if (filter !== action.filter) {
      return state
    }
    switch (action.type) {
      case 'RECEIVE_NEWS':
        return action.response.map(news => news.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (filter !== action.filter) {
      return state
    }
    switch (action.type) {
      case 'REQUEST_NEWS':
        return true
      case 'RECEIVE_NEWS':
        return false
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
  })
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
