import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'

/* simple typing with option */
// type Test = 'yes' | 'no' | null
// const tryTest: Test = 'yes'

/* interface */
// interface objTest {
//   description: string | null
//   id: number
//   quantity: number
//   rating: number | null
//   title: string
//   [key: string]: any
// }

// const tryObjTest: objTest = {
//   description: '',
//   id: 1234,
//   quantity: 0,
//   rating: 4.2,
//   title: 'Testing Item',
//   outOfStockMessage: `We'll update this soon`,
// }

/* function */
function Test() {
  const [test, setTest] = useState<null | number>(null)

  return (
    <>
      <button onClick={() => setTest(test + 1)}>+</button>
      <p>{test}</p>
    </>
  )
}

ReactDOM.render(
  <div>
    <Test />
  </div>,
  document.getElementById('root')
)
