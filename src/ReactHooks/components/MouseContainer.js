import React, { useState } from 'react'
import FunctionMouse from './FunctionMouse'

function MouseContainer() {

    const [display, setDisplay] = useState(true)
  return (
    <div>
        <h3>Removing and displaying event listeners</h3>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <FunctionMouse />}
    </div>
  )
}

export default MouseContainer
