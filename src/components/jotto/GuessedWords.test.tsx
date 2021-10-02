import { shallow, ShallowWrapper } from 'enzyme';
import { Table, TableRow } from '@material-ui/core';

import { findByTestAttr } from '../../../test/testUtils';
import { GuessedWords, Props } from './GuessedWords';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props: Props) => {
  return shallow(<GuessedWords {...props} />);
};

describe('if there are no words guessed', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords: Props = {
    guessedWords: [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'apple', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ],
  };
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = setup(guessedWords);
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "guessed word" section', () => {
    const table = wrapper.find(Table);
    expect(table.length).toBe(1);
  });
  test('renders  number of guessed words', () => {
    const tableRows = wrapper.find(TableRow);
    expect(tableRows.length).toBe(guessedWords.guessedWords.length + 1); // ヘッダ含む
  });
});
