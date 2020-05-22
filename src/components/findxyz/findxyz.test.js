import React from 'react';
import { shallow } from 'enzyme';
import Findxyz from './findxyz';

describe('<Findxyz />', () => {
  test('renders', () => {
    const wrapper = shallow(<Findxyz />);
    expect(wrapper).toMatchSnapshot();
  });
});
