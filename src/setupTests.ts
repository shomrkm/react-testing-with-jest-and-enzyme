import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import enzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new enzymeAdapter() });
