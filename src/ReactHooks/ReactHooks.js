import React from 'react'
import UseState from './components/UseState'
import HookCounter from './components/HookCounter'
import HookPreState from './components/HookPreState'
import ObjectUseState from './components/ObjectUseState'
import ArrayUseState from './components/ArrayUseState'

function ReactHooks() {
  return (
    <div>
        <h2>useState Hook</h2>
     <UseState />
     <HookCounter />
     <HookPreState />
     <ObjectUseState />
     <ArrayUseState />
    </div>
  )
}

export default ReactHooks
