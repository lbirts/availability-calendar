import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calendar header', () => {
  render(<App />);
  const linkElement = screen.getByText(/calendar/i);
  expect(linkElement).toBeInTheDocument();
});
