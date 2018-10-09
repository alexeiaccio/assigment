import { combineReducers } from 'redux'
import newNews from './newNews'
import modal from './modal'
import news from './news'

const reducers = combineReducers({
  newNews,
  modal,
  news,
})

export default reducers
