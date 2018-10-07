import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App path="/" />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default hot(module)(Root)
