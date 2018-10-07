import React from 'react'
import { injectGlobal } from 'emotion'

import NewsList from './NewsList'
import '../fonts/Helvetica/stylesheet.css'

injectGlobal`
  body {
    ${tw(['font-sans', 'm-0'])};
  }
`

const App = () => (
  <NewsList />
)

export default App
