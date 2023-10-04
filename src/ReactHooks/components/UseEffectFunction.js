import { useEffect, useState } from 'react'

function UseEffectFunction() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

    const handleClick = () => {
      setCount(count + 1)
    }

  return (
    <div>

        <h3>UseEffect with Function</h3>
      <button onClick={handleClick} title='Click and chect it on page title'>click {count} times</button>
    
    </div>
  )
}

export default UseEffectFunction
