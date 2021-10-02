/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import { Jotto } from './Jotto';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = () => {
  // use mount , because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<Jotto />);
};

describe.each([
  [null, true, false],
  ['party', false, true],
])('renders with secretWord as %s', (secretWord, loadingShows, appShows) => {
  let wrapper: any;
  let originalUseReducer: any;
  beforeEach(() => {
    originalUseReducer = React.useReducer;
    const mockUseReducer = jest
      .fn()
      .mockReturnValue([{ secretWord }, jest.fn()]);
    React.useReducer = mockUseReducer;
    wrapper = setup();
  });
  afterEach(() => {
    React.useReducer = originalUseReducer;
  });

  test(`render loading spinner: ${loadingShows}`, () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(loadingShows);
  });
  test(`render app: ${appShows}`, () => {
    const appComponent = findByTestAttr(wrapper, 'jotto-app');
    expect(appComponent.exists()).toBe(appShows);
  });
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    (mockGetSecretWord as jest.Mock).mockClear();
  });
  test('get secret word', () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('get secretWord does not run on app update', () => {
    const wrapper = setup();
    (mockGetSecretWord as jest.Mock).mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps({});

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
