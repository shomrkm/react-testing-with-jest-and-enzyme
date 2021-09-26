import React, { useEffect, useState } from 'react'
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
  const [secretWord, setSecretWord] = useState('');
  // TODO: get props from shared state
  const success = false;
  const guessedWords:GuessedWordList = [];

  useEffect(() => {
    getSecretWord(setSecretWord);
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