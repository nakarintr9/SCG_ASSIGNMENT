import React from 'react';
import { shallow } from 'enzyme';
import Findthebestway from './findthebestway';

describe('<Findthebestway />', () => {
  test('renders', () => {
    const wrapper = shallow(<Findthebestway />);
    expect(wrapper).toMatchSnapshot();
  });
});
