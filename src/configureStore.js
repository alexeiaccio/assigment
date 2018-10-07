import { createStore } from 'redux'

import { loadState, saveState } from './localStorage'
import counter from './reducers'

const configureStore = () => {
  const persistedState = loadState()
  const store = createStore(counter, persistedState)

  store.subscribe(() => {
    saveState({
      count: store.getState().count,
    })
  })
  return store
}

export default configureStore