import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Backdrop, CircularProgress } from '@material-ui/core';

import { Congrats } from './Congrats';
import { GuessedWordList, GuessedWords } from './GuessedWords';
import { Input } from './Input';
import { getSecretWord } from './actions';

const Container = styled.div`
  text-align: center;
`;

interface State {
  secretWord: string;
}

const initialState: State = {
  secretWord: '',
};

/**
 * @function reducer to update state, automatically called by dispatch
 * @param state  {object} - previous state
 * @param action {object} - 'type' and 'payload' properties
 * @return {object}  -new state
 */
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

interface Props {}

export const Jotto: React.VFC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO: get props from shared state
  const success = false;
  const guessedWords: GuessedWordList = [];

  const setSecretWord = (secretWord: string) => {
    dispatch({ type: 'setSecretWord', payload: secretWord });
  };

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  if (state.secretWord === null) {
    return (
      <div className="container" data-test="spinner">
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  return (
    <Container>
      <div data-test="jotto-app" className="jotto-app">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} secretWord={state.secretWord} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    </Container>
  );
};
