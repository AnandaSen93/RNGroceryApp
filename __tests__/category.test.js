import React from 'react';
import renderer from 'react-test-renderer';
import Category from '../src/screen/category_page/category';

test('renders the category screen content', () => {
  const tree = renderer.create(<Category />).toJSON();

  expect(tree).toBeTruthy();
});
