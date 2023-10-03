import React, { useState } from 'react'

function ObjectUseState() {

    const [name, setName] = useState({firstName:'', lastName:''})
  return (

    <>
    <h3>UseState with object</h3>

    <form>

        <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />

        <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />

        <p>Your first name is : <strong>{name.firstName}</strong></p>

        <p>Your last name is : <strong>{name.lastName}</strong></p>

    </form>
    </>
    
  )
}

export default ObjectUseState
