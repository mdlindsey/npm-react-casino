import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from '../src/components';
test('Card will render', () => {
  let isClicked = false;
  const clicker = () => isClicked = !isClicked;
  const component = renderer.create(
    <Card suit="S" face="A" onClick={clicker} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseUp();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  // expect(isClicked).to.equal(true);

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});