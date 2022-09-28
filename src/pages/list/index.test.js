import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import { payloadTest } from '../../redux/slices/employees.test';
import List from '.';

const setup = (state) => render(<List />, state && [state]);

describe('List page', () => {
  it('Should have title display', () => {
    setup();
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Current employees');
  });
  it('Should not have modal', () => {
    setup();
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
  it('Should have modal not open', () => {
    setup(payloadTest);
    const modal = screen.getByTestId('dialog');
    expect(modal).not.toHaveAttribute('open');
    expect(modal).toHaveTextContent('Do you want to delete');
  });
  it('Should display No data', () => {
    setup();
    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('No data');
  });
  it('Should display employees', () => {
    setup(payloadTest);
    const table = screen.getByRole('table');
    expect(table).not.toHaveTextContent('No data');
    expect(table).toHaveTextContent('Valentin');
  });
});
