import React, { useState } from 'react'

function HookPreState() {
    const initialCount =0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
      for(let i=0; i<5; i++)
      setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
        <h3>Hook Pre State using useState</h3>
        <p>count: {count}</p>
        <button onClick={() => setCount(initialCount)} title='Click to reset the value'>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)} title='click to increase the value'>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)} title='click to decrease the value'>Decrement</button>
        <button onClick={incrementFive} title='Click to increase 5 times'>Increment +5</button>
      
    </div>
  )
}

export default HookPreState
