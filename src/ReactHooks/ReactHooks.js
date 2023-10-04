import {UseState, HookCounter, HookPreState, ObjectUseState, ArrayUseState, UseEffect, UseEffectFunction, UseEffectMouse, FunctionMouse, MouseContainer, IntervalHookCounter} from './components/components'

export function ReactHooks() {
  
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
        <IntervalHookCounter />

    </div>
  )
}

export default ReactHooks
