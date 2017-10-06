import React from 'react';
import Slider from '../slider/slider.jsx';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Slider/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
