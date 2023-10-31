import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('NewBoxForm component renders without crashing', () => {
  render(<NewBoxForm />);
});

test('NewBoxForm component matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('NewBoxForm component updates input values and submits the form', () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(
    <NewBoxForm addBox={() => {}} />
  );

  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const createButton = getByText('Create Box');

  // Test input updates
  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '150' } });
  fireEvent.change(colorInput, { target: { value: 'red' } });

  expect(getByDisplayValue('100')).toBeInTheDocument();
  expect(getByDisplayValue('150')).toBeInTheDocument();
  expect(getByDisplayValue('red')).toBeInTheDocument();

  // Test form submission
  fireEvent.click(createButton);
  // Add further tests here based on your application logic
});
