import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default hot(module)(Root)
