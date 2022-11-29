# home-made-observable-state
home-made-observable-state

### Usage example

```
import React from 'react'
import useTest from './test-store'

export default function Purchases() {
  const { state, actions } = useTest()

  return (
    <div className='pt-5'>
      <div>
        {state.name}, {state.count}
        <br></br>
        <button className='button' onClick={actions.incrementCount}>+</button>
        <button className='button' onClick={actions.decrementCount}>-</button>
      </div>
    </div>
  )
}
```

