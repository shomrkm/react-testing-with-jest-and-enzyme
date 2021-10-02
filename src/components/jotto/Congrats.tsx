import React from 'react';

export interface Props {
  success: boolean;
}

/**
 * Function react component for congratulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element} Rendered component (or null if `success` props)
 */
export const Congrats: React.VFC<Props> = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Contratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
