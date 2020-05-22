import React from 'react';
import { shallow } from 'enzyme';
import Findbc from './findbc';

describe('<Findbc />', () => {
  test('renders', () => {
    const wrapper = shallow(<Findbc />);
    expect(wrapper).toMatchSnapshot();
  });
});
