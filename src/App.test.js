import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import Reservations from '../src/components/Reservations';

jest.mock('../src/components/NavBar', () => () => <div />);
jest.mock('../src/components/Menu', () => () => <div />);
jest.mock('../src/components/Header', () => () => <div />);

test('Renders the Reservations heading', () => {
  render(<Reservations />);
  const formLabel = screen.getByLabelText(/Choose Date/i);
  expect(formLabel).toBeInTheDocument();
});

test('Tests the time selection', () => {
    render(<Reservations />);
    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
        target: {value: '17:00'}
    });
    expect(screen.getByDisplayValue('17:00')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/Choose Date/i), {
        target: { value: '2025-06-01' }
      });
      expect(screen.getByDisplayValue('2025-06-01')).toBeInTheDocument();
})