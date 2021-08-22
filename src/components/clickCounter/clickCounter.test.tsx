import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ClickCounter } from './clickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without error', ()=>{
  const wrapper = shallow(<ClickCounter />);
  const clickCounter = wrapper.find("[data-test='component-click-counter']");
  expect(clickCounter.length).toBe(1);
})

test('renders increment button', ()=>{
  
})
test('renders counter display', ()=>{
  
})
test('counter display starts at 0', ()=>{
  
})
test('clicking button increments counter display', ()=>{
  
})