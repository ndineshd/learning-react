import { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
        <h3>hook interval count using useEffect</h3>
      {count}
    </div>
  )
}

export default IntervalHookCounter
