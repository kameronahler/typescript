import * as React from 'react'
import { useState, useEffect } from 'react'
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
  const colors: string[] = ['black', 'gray']
  const handleClick = (): void => setTest(test + 1)

  useEffect(() => {
    const even: boolean = test % 2 === 0

    console.log(test % 2)
    if (even) {
      document.body.style.backgroundColor = colors[0]
    } else {
      document.body.style.backgroundColor = colors[1]
    }
  }, [test])

  return (
    <>
      <button onClick={handleClick}>+</button>
      <p style={{ color: 'white' }}>{test}</p>
    </>
  )
}

ReactDOM.render(
  <div>
    <Test />
  </div>,
  document.getElementById('root')
)
