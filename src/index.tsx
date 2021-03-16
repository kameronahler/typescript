import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import App from './components/App/App'

// type Test = 'yes' | 'no' | null
// const tryTest: Test = 'yes'

interface objTest {
  description: string | null
  id: number
  quantity: number
  rating: number | null
  title: string
  [key: string]: any
}

const tryObjTest: objTest = {
  description: '',
  id: 1234,
  quantity: 0,
  rating: 4.2,
  title: 'Testing Item',
  outOfStockMessage: `We'll update this soon`,
}

ReactDOM.render(
  <div>
    <p>{JSON.stringify(tryObjTest)}</p>
  </div>,
  document.getElementById('root')
)
