import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.v202402221500';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
