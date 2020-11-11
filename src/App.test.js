import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, my name is Jamie and I am/i);
  expect(linkElement).toBeInTheDocument();
});
