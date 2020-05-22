import React from 'react';
import { shallow } from 'enzyme';
import Cv from './cv';

describe('<Cv />', () => {
  test('renders', () => {
    const wrapper = shallow(<Cv />);
    expect(wrapper).toMatchSnapshot();
  });
});
