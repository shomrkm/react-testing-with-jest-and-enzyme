import React, { useEffect } from 'react'
import styled from 'styled-components';

import { Congrats } from './Congrats'
import { GuessedWordList, GuessedWords } from './GuessedWords'
import { Input } from './Input';
import { getSecretWord } from './actions';

const Container = styled.div`
  text-align: center;
`

interface Props {
}

export const Jotto: React.VFC<Props> = () => {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords:GuessedWordList = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <Container>
      <div data-test="jotto-app" className="jotto-app">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} secretWord={secretWord} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    </Container>
  );
}