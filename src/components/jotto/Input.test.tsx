import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input } from './Input';
import { findByTestAttr } from '../../../test/testUtils';

// mock entire module for destructuring useState on import.
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', ()=>({
//   ...jest.requireActual('react'),
//   useState: (initialState: any)=>[initialState, mockSetCurrentGuess]
// }));

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (success=false, secretWord='party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', ()=>{
  describe('success is true', () => {
    let wrapper:ShallowWrapper;
    beforeEach(()=>{
      wrapper = setup(true);
    });
    test('input renders without error', ()=>{
      const component = wrapper.find('component-input');
      expect(component.length).toBe(1);
    })
    test('input box does not show', ()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    })
    test('submit button does not show', ()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      // const submitButton = wrapper.find(Button);
      expect(submitButton.exists()).toBe(false);
    })
  })
  describe ('success is false', ()=>{
    let wrapper:ShallowWrapper;
    beforeEach(()=>{
      wrapper = setup(false);
    });
    test('input renders without error', ()=>{
      const component = wrapper.find('component-input');
      expect(component.length).toBe(1);
    })
    test('input box show', ()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    })
    test('submit button show', ()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    })

  })
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper: ShallowWrapper;
  let originalUseState:any;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ["", mockSetCurrentGuess];
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test('state updates with value of input box upon change', () => {
    // material-ui のコンポーネントを使うときは以下のように検索する
    const inputBox= findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });
  test('field is cleared upon submit button click', () => {
    const button = findByTestAttr(wrapper, 'submit-button');

    button.simulate("click", {preventDefault() {}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});