import { useState } from 'react'

function ObjectUseState() {

    const [name, setName] = useState({firstName:'', lastName:''})

    const inputFirstName = e => {
      setName({...name, firstName: e.target.value}) //...name used to spread
    }

    const inputLastName = e => {
      setName({...name, lastName: e.target.value})
    }

  return (
    <>
      <h3>UseState with object</h3>

      <form>

          <input type='text' value={name.firstName} onChange={inputFirstName} />

          <input type='text' value={name.lastName} onChange={inputLastName} />

          <p>Your first name is : <strong>{name.firstName}</strong></p>

          <p>Your last name is : <strong>{name.lastName}</strong></p>

      </form>
    </>
    
  )
}

export default ObjectUseState
