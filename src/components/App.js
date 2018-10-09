import React from 'react'
import { Router } from '@reach/router'

import CategoryNewsList from './CategoryNewsList'
import NewsList from './NewsList'

const App = () => (
  <Router>
    <NewsList path="/" />
    <CategoryNewsList path="/:filter" />
  </Router>
)

export default App
