import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  all: createList('all'),
})

const news = combineReducers({
  byId,
  listByFilter,
})

export default news

export const getVisibleNews = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getNews(state.byId, id))
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])
