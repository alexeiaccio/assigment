import * as api from '../api'
import { getIsFetching } from '../reducers'

const requestNews = filter => ({
  type: 'REQUEST_NEWS',
  filter,
})

const receiveNews = (filter, response) => ({
  type: 'RECEIVE_NEWS',
  filter,
  response,
})

export const fetchNews = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch(requestNews(filter))

  return api.fetchNews(filter).then(response => {
    dispatch(receiveNews(filter, response))
  })
}
