import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Store from './Store';

test('renders learn react link', () => {
  render(<App Store={Store} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
