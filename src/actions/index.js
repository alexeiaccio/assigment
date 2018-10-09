import * as api from '../api'

export const fetchNews = filter => dispatch => {
  return api.fetchNews(filter).then(
    response => {
      dispatch({
        type: 'FETCH_NEWS_SUCCESS',
        filter,
        response: response,
      })
    },
    error => {
      dispatch({
        type: 'FETCH_NEWS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      })
    }
  )
}

export const addNews = newNews => dispatch => {
  api.addNews(newNews).then(response => {
    dispatch({
      type: 'ADD_NEWS_SUCCESS',
      response: response,
    })
  })
}

export const updateNewNewsAction = value => dispatch => {
  dispatch({
    type: 'UPDATE_NEW_NEWS',
    payload: value,
  })
}

export const toggleModal = () => dispatch => {
  dispatch({
    type: 'TOGGLE_MODAL',
  })
}
