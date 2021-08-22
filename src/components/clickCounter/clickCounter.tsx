import React from 'react'

interface Props {

}

export const ClickCounter: React.VFC<Props> = () => {
  return (
    <div data-test="component-click-counter">
      <h1>App</h1>
    </div>
  );
}