
import React, { useState, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  let clicking = () => {
    setCount(count + 1)
  }

  let clicking1 = () => {
    setNumber(number + 1)
  }

  let heavycal = (num) => {
    console.log("Before heavy calculation")

    for (let i = 0; i < 1000000; i++) {
      // Simulating a heavy calculation
    }

    console.log("After heavy calculation")

    return num + 1
  }

  const result = useMemo(() => {
    return heavycal(number)
  }, [number])

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={clicking}>
        Increase Count
      </button>

      <h2>Result: {result}</h2>
      <button onClick={clicking1}>
        Increase Number
      </button>
    </div>
  )
}

export default App
