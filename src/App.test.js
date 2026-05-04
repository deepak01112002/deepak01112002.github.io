import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app without crashing', () => {
  render(<App />);
  // The app renders — basic smoke test
  expect(document.body).toBeInTheDocument();
});
