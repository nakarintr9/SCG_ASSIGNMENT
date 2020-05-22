import React from 'react';
import { shallow } from 'enzyme';
import Linenotify from './linenotify';

describe('<Linenotify />', () => {
  test('renders', () => {
    const wrapper = shallow(<Linenotify />);
    expect(wrapper).toMatchSnapshot();
  });
});
