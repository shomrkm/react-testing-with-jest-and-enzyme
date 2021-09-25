/**
 * @jest-environment jsdom
 */

import { mount } from "enzyme";
import { findByTestAttr } from '../../../test/testUtils'
import { Jotto } from './Jotto'

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = ()=>{
  // use mount , because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<Jotto />);
}

test('renders without error', ()=>{
  const wrapper = setup();
  const jotto = findByTestAttr(wrapper, 'jotto-app');
  expect(jotto.length).toBe(1);
})

describe('get secret word', ()=>{
  beforeEach(()=>{
    // clear the mock calls from previous tests
    (mockGetSecretWord as jest.Mock).mockClear();
  })
  test('get secret word', ()=>{
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  })
  test('get secretWord does not run on app update', ()=>{
    const wrapper = setup();
    (mockGetSecretWord as jest.Mock).mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps({});

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  })

})