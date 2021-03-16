import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import App from './components/App/App'

type Test = 'yes' | 'no' | null
const tryTest: Test = 'yes'

ReactDOM.render(
  <div>
    <p>{tryTest}</p>
  </div>,
  document.getElementById('root')
)
