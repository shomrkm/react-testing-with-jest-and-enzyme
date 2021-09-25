/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import { TableRow, TextField, Button } from '@material-ui/core';

import { Jotto } from './Jotto';
import { findByTestAttr } from '../../../test/testUtils';


/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function setup
 * @param {object} state - Initial conditions.
 * @returns {ShallowWrapper} Enzyme wrapper of mounted Jotto component
 */
const setup = (state:any) => {

  // TODO: apply state
  const wrapper = mount(<Jotto />);

  // add value to input box
  // const inputBox:ReactWrapper = findByTestAttr(wrapper, 'input-box');
  const inputBox:ReactWrapper = wrapper.find(TextField);
  inputBox.simulate('change', { target: { value: 'train'} });

  // simulate click on submit button
  const submitButton = wrapper.find(Button);
  submitButton.simulate('click', { preventDefault() {}});

  return wrapper;
};

describe('invalid word guessed', ()=> {
  test.todo('guessedWords table does not get another row')
})

describe.skip('no words guessed', ()=> {
  let wrapper:any;
  beforeEach(()=>{
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    });
  });
  test('create GuessedWords table with one row', ()=>{
    const guessedWordRows = wrapper.find(TableRow);
    expect(guessedWordRows).toHaveLength(1);
  })
})

describe.skip('some words guessed', ()=> {
  let wrapper:any;
  beforeEach(()=>{
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{guessedWord: 'agile', letterMatchCount: 1}]
    });
    // add value to input box
    const inputBox:ReactWrapper = wrapper.find(TextField);
    const mockEvent = { target: { value: 'party'}};
    inputBox.simulate('change', mockEvent);

    // simulate click on submit button
    const submitButton = wrapper.find(Button);
    submitButton.simulate('click', { preventDefault() {}});
  });
  test('add row to guessedWord table', ()=>{
    const guessedWordRows = wrapper.find(TableRow);
    expect(guessedWordRows).toHaveLength(3);
  })
  test('display congrats component', ()=>{
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  })
})

describe.skip('guess secret word', ()=> {
  let wrapper:any;
  beforeEach(()=>{
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{guessedWord:'agile', letterMatchCount: 1}]
    });
    // add value to input box
    const inputBox:ReactWrapper = wrapper.find(TextField);
    const mockEvent = { target: { value: 'party'}};
    inputBox.simulate('change', mockEvent);
    
    // simulate click on submit button
    const submitButton:ReactWrapper = wrapper.find(Button);
    submitButton.simulate('click', { preventDefault() {}});
  });
  test('add row to guessedWords table',()=>{
    const guessedWordRows = wrapper.find(TableRow);
    expect(guessedWordRows).toHaveLength(3);
  })
  test('display congrats comopnent', ()=>{
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  })
  test('does not display input component content', ()=>{
    const inputBox:ReactWrapper = wrapper.find(TextField);
    expect(inputBox.exists()).toBe(false);
  })
})
