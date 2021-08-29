import React from 'react'

interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}

export interface Props {
  guessedWords: GuessedWord[];
}

/**
 * Function react component for guessed word.
 * @function
 * @param {object} props 
 * @returns null
 */
export const GuessedWords: React.VFC<Props> = () => {
  return ( 
    <div />
  );
}