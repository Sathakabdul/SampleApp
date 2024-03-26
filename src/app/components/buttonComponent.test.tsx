import { render, screen } from '@testing-library/react';
import ButtonComponent from './buttonComponent';
import '@testing-library/jest-dom';

it('Test the button component', () => {
  render(<ButtonComponent />);
  const myElem = screen.getByText('Money Transfer Services');
  expect(myElem).toBeInTheDocument();
});
