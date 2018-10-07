import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import { loadState, saveState } from './localStorage'
import reducers from './reducers'

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}

export default configureStore
