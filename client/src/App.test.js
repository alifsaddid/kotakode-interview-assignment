import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const elementInput = screen.getByLabelText('Add Your Task');
  const timeInput = screen.getByLabelText('Start Time');
  const elementButton = screen.getByRole('button', {name: /Submit/i});

  // Expect input works correctly
  fireEvent.change(elementInput, {target: {value: 'Menyapu Lantai'}});
  fireEvent.change(timeInput, {target: {value: '06:00'}});
  expect(elementInput.value).toBe('Menyapu Lantai');
  expect(timeInput.value).toBe('06:00');
  
  // Expect task added successfully and input area emptied
  fireEvent.click(elementButton);
  expect(elementInput.value).toBe('');
  expect(timeInput.value).toBe('00:00');
  expect(screen.getByText(/Menyapu Lantai/i)).toBeInTheDocument();


  
});
