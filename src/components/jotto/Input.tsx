import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  justify-content: center;
`
StyledInput.displayName = 'component-input';

export interface Props {
  success: boolean;
  secretWord: string;
}

export const Input: React.VFC<Props> = ({success, secretWord}) => {
  const [currentGuess, setCurrentGuess] = useState("");

  if(success){
    return <StyledInput />
  }

  return (
    <StyledInput>
      <TextField 
        id="input-box"
        label="enter guess" 
        onChange={(evt)=> setCurrentGuess(evt.target.value)}
      />
      <Button 
        id="submit-button"
        variant="outlined"
        onClick={(evt)=>{
          evt.preventDefault();
          setCurrentGuess("");
        }}
      >
          Submit
      </Button>
    </StyledInput>
  );
}