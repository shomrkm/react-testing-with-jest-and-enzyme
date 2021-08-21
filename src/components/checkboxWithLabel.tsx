import React, { useState, useCallback } from 'react'

interface Props {
  labelOn: string,
  labelOff: string
}

export const CheckboxWithLabel: React.VFC<Props> = ({labelOn, labelOff}) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked );
  };

  return (
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        {isChecked ? labelOn : labelOff}
      </label>
    );
}
