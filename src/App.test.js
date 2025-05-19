import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservations from './components/Reservations';
jest.mock('react-router-hash-link', () => ({
    HashLink: ({ children, ...props }) => <a {...props}>{children}</a>,
  }));

test('Renders the Reservations heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Make Your reservation Now");
    expect(headingElement).toBeInTheDocument();
})