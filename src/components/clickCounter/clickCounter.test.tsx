import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ClickCounter } from './clickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the ClickCounter component.
 * @function setup
 * @return {ShallowWrapper}
 */
const setup = ()=> shallow(<ClickCounter />);

const findByTestAttr = (wrapper: ShallowWrapper, val: string) => wrapper.find(`[data-test='${val}']`);

test('render without error', ()=>{
  const wrapper = setup();
  const clickCounter = findByTestAttr(wrapper, "component-click-counter");
  expect(clickCounter.length).toBe(1);
})

test('renders increment button', ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
})

test('renders counter display', ()=>{
  const wrapper = setup();
  const counterDisplay= findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
})

test('counter display starts at 0', ()=>{
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
})

test('clicking button increments counter display', ()=>{
  const wrapper = setup();

  // find the button 
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate('click');

  // find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
})