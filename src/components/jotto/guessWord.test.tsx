import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Jotto } from './Jotto';
import { findByTestAttr } from '../../../test/testUtils';


/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function setup
 * @param {object} state - Initial conditions.
 * @returns {ShallowWrapper} Enzyme wrapper of mounted Jotto component
 */
const setup = (state={}) => {

  // TODO: apply state
  const wrapper = mount(<Jotto />);

  // add value to input box
  const inputBox:ReactWrapper = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train'} });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {}});

  return wrapper;
};

describe('no words guessed', ()=> {
})

describe('some words guessed', ()=> {
})

describe('guessed secret word', ()=> {
})
