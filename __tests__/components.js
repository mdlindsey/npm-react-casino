import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../src/components';
test('Card will render', () => {
  const component = renderer.create(
    <Card suit="S" face="A" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});