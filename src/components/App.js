import React from 'react'
import { Link } from '@reach/router'
import Counter from './Counter'
import { injectGlobal } from 'emotion'

import '../fonts/Helvetica/stylesheet.css'

injectGlobal`
  body {
    ${tw(['font-sans', 'm-0'])};
  }
`

const App = () => (
  <>
    <Counter path="?count=2" />
    <Link to="?count=2">2</Link>
  </>
)

export default App
