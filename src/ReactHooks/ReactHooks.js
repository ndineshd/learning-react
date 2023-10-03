import React from 'react'
import UseState from './components/UseState'
import HookCounter from './components/HookCounter'
import HookPreState from './components/HookPreState'
import ObjectUseState from './components/ObjectUseState'
import ArrayUseState from './components/ArrayUseState'
import UseEffect from './components/UseEffect'
import UseEffectFunction from './components/UseEffectFunction'
import UseEffectMouse from './components/UseEffectMouse'
import FunctionMouse from './components/FunctionMouse'
import MouseContainer from './components/MouseContainer'

function ReactHooks() {
  return (
    <div>
        <h1>useState Hook</h1>

     <UseState />
     <HookCounter />
     <HookPreState />
     <ObjectUseState />
     <ArrayUseState />
     <h1>UseEffect Hook</h1>
     <UseEffect />
     <UseEffectFunction />
     <UseEffectMouse />
     <FunctionMouse />
     <MouseContainer />

    </div>
  )
}

export default ReactHooks
