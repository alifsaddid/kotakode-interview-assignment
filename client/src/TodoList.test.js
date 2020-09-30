import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import uuid from 'uuid/v1';

test('Renders Todo List Correctly', () => {
  const {getByText, getByRole} = render(
    <TodoList tasks = {
        [
          {name: "Masak Ikan", id: uuid(), startTime: "06:00"},
          {name: "Minum Air", id: uuid(), startTime: "07:00"},
        ]
      }
    />
  );

  //Expects task list displayed
  const linkElement = getByText(/Masak Ikan/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = getByText(/Minum Air/i);
  expect(linkElement2).toBeInTheDocument();

});


