import React, { useState } from 'react'

interface Props {

}

export const ClickCounter: React.VFC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-click-counter">
      <h1 data-test="counter-display">
        The counter is currently &ensp;
        <span data-test="count">{count}</span>
        </h1>
      <button 
        data-test="increment-button"
        onClick={()=>setCount(count+1)}>
          Increment counter
      </button>
    </div>
  );
}