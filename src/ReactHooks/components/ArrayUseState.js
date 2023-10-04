import { useState } from 'react'

function ArrayUseState() {

    const [items, setItems] = useState([])

    const HandleAddItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <>
        <h3>useState with Array</h3>
        <button onClick={HandleAddItem}>Add a Number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
      
    </>
  )
}

export default ArrayUseState
