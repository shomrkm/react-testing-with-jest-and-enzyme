import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { CheckboxWithLabel } from './components/checkboxWithLabel';

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
      {/* <CheckboxWithLabel labelOn={'Label On'} labelOff = {'Label Off'} /> */}
    </>
  );
};
