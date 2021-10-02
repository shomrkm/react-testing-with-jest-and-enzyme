import { configure } from 'enzyme';
import enzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new enzymeAdapter() });
