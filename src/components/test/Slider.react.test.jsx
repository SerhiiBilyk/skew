


import React from 'react';
import Slider from '../slider/slider.jsx';
import Enzyme,{shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
describe('<Left />', () => {
  it('should render an <div> tag', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper.type()).toEqual('div');
  });
});
