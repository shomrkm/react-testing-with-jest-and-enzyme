import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { ClickCounter } from './components/clickCounter/clickCounter';
import { Jotto } from './components/jotto/Jotto';

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <ClickCounter /> */}
      <Jotto />
    </>
  );
};
