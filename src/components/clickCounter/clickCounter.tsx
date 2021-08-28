import React, { useState } from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.div<{hidden: boolean}>`
  color: red;
  {props=>props.hidden && 
    display: none;
  }
`
StyledErrorMessage.displayName = 'StyledErrorMessage';

export const ClickCounter: React.VFC = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const increment = ()=> {
    setCount(prev=>prev + 1)
    setError(false);
  }

  const decrement = ()=> {
    if(count > 0){
      setCount(prev=>prev - 1);
      setError(false);
    }
    else {
      setError(true);
    }
  };

  return (
    <div data-test="component-click-counter">
      <h1 data-test="counter-display">
        The counter is currently &ensp;
        <span data-test="count">{count}</span>
        </h1>
      <button 
        data-test="increment-button"
        onClick={increment}>
          Increment
      </button>
      <button 
        data-test="decrement-button"
        onClick={decrement}>
          Decrement
      </button>
      <StyledErrorMessage hidden={!error}>
        Counter can't go below 0.
      </StyledErrorMessage>
    </div>
  );
}