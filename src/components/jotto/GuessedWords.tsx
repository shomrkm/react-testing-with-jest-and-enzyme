import React from 'react'
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTable = styled.div`
  margin: auto;
  padding: auto;
  max-width: 500px;
`

export interface GuessedWord {
  guessedWord: string;
  letterMatchCount: number;
}
export type GuessedWordList = GuessedWord[];

export interface Props {
  guessedWords: GuessedWordList;
}

/**
 * Function react component for guessed word.
 * @function
 * @param {object} props 
 * @returns null
 */
export const GuessedWords: React.VFC<Props> = (props: Props) => {
  let contents;
  if(props.guessedWords.length === 0){
    contents = (
      <span data-test="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index)=>{
      return (
        <TableRow key={index}>
          <TableCell>{word.guessedWord}</TableCell>
          <TableCell align="right">{word.letterMatchCount}</TableCell>
        </TableRow>
      )
    });
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <StyledTable>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Guess</TableCell>
                <TableCell align="right">Matching Letters</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guessedWordsRows}
            </TableBody>
          </Table>
        </TableContainer>
        </StyledTable>
      </div>
    )
  }
  return ( 
      <div data-test="component-guessed-words">
        { contents }
       </div>
  );
}