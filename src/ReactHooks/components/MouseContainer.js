import { useState } from 'react'
import {FunctionMouse} from './components'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    const handleDisplay = () => {
      setDisplay(!display)
    }

  return (
    <div>
      <h3>Removing and displaying event listeners</h3>
      <button onClick={handleDisplay}>Toggle display</button>
      {display && <FunctionMouse />}
    </div>
  )
}

export default MouseContainer
