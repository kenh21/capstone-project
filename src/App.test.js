import { fireEvent, userEvent, render, screen, waitFor } from '@testing-library/react';
import Reservations from '../src/components/Reservations';

jest.mock('../src/components/NavBar', () => () => <div />);
jest.mock('../src/components/Menu', () => () => <div />);
jest.mock('../src/components/Header', () => () => <div />);

test('Renders the Reservations heading', () => {
  render(<Reservations />);
  const formLabel = screen.getByLabelText(/Choose Date/i);
  expect(formLabel).toBeInTheDocument();
});

test('Tests the time selection', async () => {
  window.fetchAPI = jest.fn(() => ['17:00', '18:30']);
    render(<Reservations />);
    fireEvent.change(screen.getByLabelText(/Choose Date/i), {
      target: {value: '2025-06-01'}
    });
    await waitFor(() => {
      expect(screen.getByText('17:00')).toBeInTheDocument();
    });
    const timeSelected = screen.getByLabelText(/Choose Time/i);
    fireEvent.change(timeSelected, {target: {value: '17:00'}});
      expect(timeSelected.value).toBe('17:00');
      expect(screen.getByDisplayValue('2025-06-01')).toBeInTheDocument();
})

test('Tests that form inputs are valid', () => {
  render(<Reservations />);
  const form = screen.getByTestId('reservation-form');
  expect(form.checkValidity()).toBe(false);
  const dateSelected = screen.getByLabelText(/Choose Date/i);
  expect(dateSelected.checkValidity()).toBe(false);
  const timeSelected = screen.getByLabelText(/Choose Time/i);
  expect(timeSelected.checkValidity()).toBe(false);
})

