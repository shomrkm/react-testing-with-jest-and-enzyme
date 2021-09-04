
import React from 'react'
import { Congrats } from './Congrats'
import { GuessedWords } from './GuessedWords'
import styled from 'styled-components';
import { Input } from './Input';

const Container = styled.div`
  text-align: center;
`

interface Props {}

export const Jotto: React.VFC<Props> = () => {
  return (
    <Container>
      <div data-test="jotto-app" className="jotto-app">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <Input success={false} secretWord='abcde'/>
        <GuessedWords guessedWords={[
          {guessedWord:'train', letterMatchCount: 3},
          {guessedWord:'apple', letterMatchCount: 2}
        ]} />
      </div>
    </Container>
  );
}