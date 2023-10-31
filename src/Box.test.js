import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('Box component renders without crashing', () => {
  render(<Box />);
});

test('Box component matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

