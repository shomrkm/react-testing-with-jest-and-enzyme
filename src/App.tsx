import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { ClickCounter } from './components/clickCounter/clickCounter';

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
      <h1>learn react</h1>
      <ClickCounter />
    </>
  );
};
