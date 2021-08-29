import { shallow } from 'enzyme';

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

test('renders without error', ()=>{
});
