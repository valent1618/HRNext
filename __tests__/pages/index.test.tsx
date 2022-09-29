import { screen, fireEvent } from '@testing-library/react';
import render from '../../setupTests';
import Create from '../../src/pages';
import { createEmployee } from '../../src/redux/slices/employees';

jest.mock('../../src/redux/slices/employees');

const setup = () => render(<Create />);

describe('Create page form', () => {
  it('Should have title display', () => {
    setup();
    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('Create Employee');
  });
  it('Should have invalid input name and date with a wrong value', () => {
    setup();
    const firstName = screen.getAllByRole('textbox')[0];
    fireEvent.change(firstName, { target: { value: 'zsdq@efzd)' } });
    // firstName need to match '[A-zÜ-ü]{2,24}([ -]{1}[A-zÜ-ü]{1,24})?'
    expect(firstName).toBeInvalid();

    const birthDate = screen.getByLabelText('Date of Birth');
    fireEvent.change(birthDate, { target: { value: '1897-02-12' } });
    // birthDate must be at least the year 1900
    expect(birthDate).toBeInvalid();

    const startDate = screen.getByLabelText('Start Date');
    fireEvent.change(startDate, { target: { value: '2019-08-20' } });
    // birthDate must be at least the year 2020
    expect(startDate).toBeInvalid();
  });
  it('Should not be valid when is not complete', () => {
    setup();
    const inputs = screen.getAllByTestId('input');
    inputs.forEach((input) => {
      expect(input).toBeInvalid();
    });

    const form = screen.getByTestId('form');
    expect(form).toBeInvalid();
  });
  it('Should be valid when all field is valid and create an employee', () => {
    setup();

    const textbox = screen.getAllByRole('textbox');
    textbox.forEach((input) => {
      fireEvent.change(input, { target: { value: 'abcdef' } });
      expect(input).toBeValid();
    });

    const birthDate = screen.getByLabelText('Date of Birth');
    fireEvent.change(birthDate, { target: { value: '1997-02-12' } });
    expect(birthDate).toBeValid();

    const startDate = screen.getByLabelText('Start Date');
    fireEvent.change(startDate, { target: { value: '2022-08-20' } });
    expect(startDate).toBeValid();

    const zipCode = screen.getByRole('spinbutton');
    fireEvent.change(zipCode, { target: { value: '35' } });
    expect(zipCode).toBeValid();

    const form = screen.getByTestId('form');
    expect(form).toBeValid();

    createEmployee.mockImplementation(() => {
      'Employee create !';
    });

    fireEvent.submit(form);
    expect(createEmployee).toHaveBeenCalled();
  });
});
