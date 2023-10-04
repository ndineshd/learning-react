import { useState } from 'react'

function HookPreState() {
    const [count, setCount] = useState(0)

    const handleIncrementFive = () => {
      setCount(count + 5)
    }

    const handleReset = () => {
      setCount(0)
    }

    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1)
    }

    const handleDecrement = () => {
      setCount(prevCount => prevCount - 1)
    }

  return (
    <div>
        <h3>Hook Pre State using useState</h3>
        <p>count: {count}</p>
        <button onClick={handleReset} title='Click to reset the value'>Reset</button>
        <button onClick={handleIncrement} title='click to increase the value'>Increment</button>
        <button onClick={handleDecrement} title='click to decrease the value'>Decrement</button>
        <button onClick={handleIncrementFive} title='Click to increase 5 times'>Increment +5</button>
      
    </div>
  )
}

export default HookPreState
