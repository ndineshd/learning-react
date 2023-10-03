import React, { useEffect, useState } from 'react'

function UseEffectFunction() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

  return (
    <div>
        <h3>UseEffect with Function</h3>
      <button onClick={() => setCount(count + 1)} title='Click and chect it on page title'>click {count} times</button>
    </div>
  )
}

export default UseEffectFunction
