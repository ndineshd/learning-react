import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0 )
  return (
    <div>
      <h3>using usestate in function</h3>
      <button onClick={() => setCount(count + 1)} title='Click to increase the value'>Count {count}</button>
    </div>
  )
}

export default HookCounter
