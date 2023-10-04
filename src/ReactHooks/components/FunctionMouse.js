import { useEffect, useState } from 'react'

function FunctionMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return() => {
          window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

  return (
    <div>
      <h3>UseEffect Mouse using function</h3>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default FunctionMouse
