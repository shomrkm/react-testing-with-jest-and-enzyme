import { shallow } from "enzyme";
import { findByTestAttr } from '../../../test/testUtils'
import { Jotto } from './Jotto'

const setup = ()=>{
  return shallow(<Jotto />);
}

test('renders without error', ()=>{
  const wrapper = setup();
  const jotto = findByTestAttr(wrapper, 'jotto-app');
  expect(jotto.length).toBe(1);
})